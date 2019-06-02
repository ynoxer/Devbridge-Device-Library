using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Extensions;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace Challenge202.TestDeviceBooking.Services
{
    public class ReservationsService: IReservationsService
    {
        private readonly DataContext _dataContext;
        private readonly ISlackService _slackService;

        public ReservationsService(DataContext dataContext, ISlackService slackService)
        {
            _dataContext = dataContext;
            _slackService = slackService;
        } 

        public IEnumerable<DateTime> GetDaysForDeviceOnMonth(int deviceId, DateTime month)
        {
            var result = new HashSet<DateTime>();
            var reservations = _dataContext.Reservations
                .Where(reservation => 
                    reservation.Device.Id == deviceId 
                    && (DatesFromSameMonth(reservation.DateFrom, month) 
                        || DatesFromSameMonth(reservation.DateTo, month)))
                .AsEnumerable();
            foreach(Reservation reservation in reservations)
            {
                result.UnionWith(DaysInRange(reservation.DateFrom.ToLocalTime(), reservation.DateTo.ToLocalTime()));
            }
            return result.Where(date => DatesFromSameMonth(date, month)).AsEnumerable();
        }

        public ICollection<ReservationForDate> GetDeviceReservationsForDate(int deviceId, DateTime date)
        {
            var result = new List<ReservationForDate>();
            var reservations = _dataContext.Reservations
                .Include(reservation => reservation.User)
                .Where(reservation => reservation.Device.Id == deviceId
                    && (DateIsSame(reservation.DateFrom.ToLocalTime(), date)
                        || DateIsSame(reservation.DateTo.ToLocalTime(), date)))
                .ToList();
            foreach(Reservation reservation in reservations)
            {
                result.Add(MapReservationForDate(reservation, date));
            }
            return result;
        }

        public async Task<ICollection<Reservation>> MakeReservation(Device device, DateTime from, DateTime to, User user)
        {
            var conflictingReservations = _dataContext.Reservations
                .Include(res => res.User)
                .Where(res => 
                    res.Device.Id == device.Id
                        && (res.DateFrom.IsBetween(from, to)
                            || res.DateTo.IsBetween(from, to)
                            || from.IsBetween(res.DateFrom, res.DateTo)
                            || to.IsBetween(res.DateFrom, res.DateTo))
                    )
                .ToList();
            
            if(conflictingReservations.Count > 0)
            {
                return conflictingReservations;
            }
            
            Reservation reservation = new Reservation()
            {
                Device = device,
                DateFrom = from,
                DateTo = to,
                User = user
            };

            //var message = $":timer_clock: {user.SlackName ?? user.Name} has reserved {device.Name} in {device.Location.City} from {from.ToLocalString()} to {to.ToLocalString()}";
            //_slackService.SendMessage(message);

            _dataContext.Add(reservation);
            await _dataContext.SaveChangesAsync();

            return null;
        }

        private ReservationForDate MapReservationForDate(Reservation reservation, DateTime date)
        {
            return new ReservationForDate(){
                Id = reservation.Id,
                DateFrom = reservation.DateFrom.ToLocalTime(),
                DateTo = reservation.DateTo.ToLocalTime(),
                UserName = reservation.User.Name 
            };
        }

        private ICollection<DateTime> DaysInRange(DateTime dateFrom, DateTime dateTo)
        {
            var result = new List<DateTime>();
            result.Add(dateFrom.Date);
            dateFrom = dateFrom.AddDays(1);
            while(dateFrom.CompareTo(dateTo) <= 0){
                result.Add(dateFrom.Date);
                dateFrom = dateFrom.AddDays(1);
            }
            return result;
        }

        private bool DatesFromSameMonth(DateTime date1, DateTime date2) 
            => date1.Year == date2.Year && date1.Month == date2.Month;

        private bool DateIsSame(DateTime date1, DateTime date2)
            => date1.Date.CompareTo(date2.Date) == 0;
    }
}

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Models;

namespace Challenge202.TestDeviceBooking.DataContracts
{
    public interface IReservationsService
    {
        IEnumerable<DateTime> GetDaysForDeviceOnMonth(int deviceId, DateTime month);

        ICollection<ReservationForDate> GetDeviceReservationsForDate(int deviceId, DateTime date);

        Task<ICollection<Reservation>> MakeReservation(Device device, DateTime from, DateTime to, User user);
    }
}

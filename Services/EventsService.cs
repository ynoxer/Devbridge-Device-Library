using System.Collections.Generic;
using System.Linq;
using Challenge202.TestDeviceBooking.Data;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.EntityFrameworkCore;

namespace Challenge202.TestDeviceBooking.Services
{
    public class EventsService : IEventsService
    {
        private readonly DataContext _dataContext;

        public EventsService(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public ICollection<Event> GetAll()
        {
            return _dataContext.Events
                .Include(e => e.Device)
                .Include(e => e.Office)
                .Include(e => e.User)
                .OrderByDescending(e => e.Date)
                .ToList();    
        }
    }
}

using System;

namespace Challenge202.TestDeviceBooking.Models
{
    public class Event
    {
        public int Id { get; set; }
        public EventType Type { get; set; }
        public Device Device { get; set; }
        public Office Office { get; set; }
        public User User { get; set; }
        public DateTime Date { get; set; }
    }
}

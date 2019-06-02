using System;

namespace Challenge202.TestDeviceBooking.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }

        public Device Device { get; set; }
        public User User { get; set; }
    }
}

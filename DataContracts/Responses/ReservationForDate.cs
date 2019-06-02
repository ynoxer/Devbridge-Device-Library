using System;

namespace Challenge202.TestDeviceBooking.DataContracts.Responses
{
    public class ReservationForDate
    {
        public int Id { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string UserName { get; set; }
    }
}

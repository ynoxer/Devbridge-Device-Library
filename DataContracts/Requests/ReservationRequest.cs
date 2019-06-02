using System;

namespace Challenge202.TestDeviceBooking.DataContracts.Requests
{
    public class ReservationRequest
    {
        public int DeviceId { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
    }
}

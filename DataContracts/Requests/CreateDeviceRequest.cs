using System;

namespace Challenge202.TestDeviceBooking.DataContracts.Requests
{
    public class CreateDeviceRequest
    {
        public string Name { get; set; }
        public string SerialNumber { get; set; }
        public string OS { get; set; }
        public string Description { get; set; }
        public int LocationId { get; set; }
    }
}

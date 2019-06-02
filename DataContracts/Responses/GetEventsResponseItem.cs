using System;

namespace Challenge202.TestDeviceBooking.DataContracts.Responses
{
    public class GetEventsResponseItem
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public int DeviceId { get; set; }
        public string DeviceName { get; set; }
        public int OfficeId { get; set; }
        public string OfficeCity { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime Date { get; set; }
    }
}

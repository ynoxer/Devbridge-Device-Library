using System;

namespace Challenge202.TestDeviceBooking.DataContracts.Responses
{
    public class GetDevicesResponse
    {
        public int Id { get; set; }
        public string SerialNumber { get; set; }
        public string Name { get; set; }
        public string OperatingSystem {get; set;}
        public string Group { get; set; }
        public string Subgroup { get; set; }
        public string Description { get; set; }
        public DateTime PurchasedOn { get; set; }
        public string Vendor { get; set; }
        public string Status { get; set; }
        public string CustodyOf { get; set; }
        public int LocationId { get; set; }
        public string LocationCity { get; set; }
        public int CustodyOfId { get; set; }
    }
}

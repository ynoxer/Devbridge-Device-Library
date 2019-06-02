using System;
using System.Collections.Generic;
using Challenge202.TestDeviceBooking.Enums;

namespace Challenge202.TestDeviceBooking.Models
{
    public class Device
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
        public DeviceStatus Status { get; set; }

        public ICollection<Reservation> Reservations { get; set; }
        public User CustodyOf { get; set; }
        public Office Location { get; set; }
    }
}

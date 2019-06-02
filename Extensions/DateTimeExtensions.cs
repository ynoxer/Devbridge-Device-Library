using System;

namespace Challenge202.TestDeviceBooking.Extensions
{
    public static class DateTimeExtensions
    {
        public static bool IsBetween(this DateTime dateTime, DateTime dateFrom, DateTime dateTo)
        {
            return dateTime.CompareTo(dateFrom) >= 0 && dateTime.CompareTo(dateTo) <= 0;
        }

        public static string ToLocalString(this DateTime dateTime)
        {
            return dateTime.ToLocalTime().ToString("yyyy-MM-dd HH:mm");
        }
    }
}

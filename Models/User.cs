using Microsoft.AspNetCore.Identity;

namespace Challenge202.TestDeviceBooking.Models
{
    public class User: IdentityUser<int>
    {
        public string Name { get; set; }
        public string SlackName { get; set; }

        public Office Location { get; set; }
    }
}

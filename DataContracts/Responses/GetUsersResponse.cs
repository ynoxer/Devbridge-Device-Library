using Challenge202.TestDeviceBooking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Challenge202.TestDeviceBooking.DataContracts.Responses
{
    public class GetUsersResponse
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string LocationCity { get; set; }
        public string SlackName { get; set; }
    }
}

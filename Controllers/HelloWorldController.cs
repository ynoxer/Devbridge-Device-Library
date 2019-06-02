using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Route("api/HelloWorld")]
    public class HelloWorldController : Controller
    {

        [HttpGet]
        public string Get()
        {
            return "Hello world!";
        }
    }
}

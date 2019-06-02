using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Route("api/Reservations")]
    public class ReservationsController: Controller
    {
        private readonly IReservationsService _reservationsService;
        private readonly IDevicesService _devicesService;
        private readonly UserManager<User> _userManager;

        public ReservationsController(IReservationsService reservationsService, IDevicesService devicesService, UserManager<User> userManager)
        {
            _reservationsService = reservationsService;
            _devicesService = devicesService;
            _userManager = userManager;
        }
        
        [HttpGet("calendar/{deviceId}/{date}")]
        public IActionResult GetDaysForDeviceOnMonth(int deviceId, DateTime date)
        {
            var reservationDays = _reservationsService.GetDaysForDeviceOnMonth(deviceId, date);
            return Ok(reservationDays);
        }

        [HttpGet("day/{deviceId}/{date}")]
        public IActionResult GetReservationsForDate(int deviceId, DateTime date)
        {
            var resevations = _reservationsService.GetDeviceReservationsForDate(deviceId, date);
            return Ok(resevations);
        }

        [HttpPost]
        public async Task<IActionResult> MakeReservation([FromBody] ReservationRequest request)
        {
            var device = _devicesService.GetById(request.DeviceId);
            if(device == null)
            {
                return NotFound();
            }

            var user = await _userManager.GetUserAsync(HttpContext.User);

            var conflicts = await _reservationsService.MakeReservation(device, request.DateFrom, request.DateTo, user);
            if(conflicts != null)
            {
                var response = conflicts.Select(conflict => new ReservationForDate()
                {
                    Id = conflict.Id,
                    DateFrom = conflict.DateFrom,
                    DateTo = conflict.DateTo,
                    UserName = conflict.User.Name
                });
                return StatusCode((int)HttpStatusCode.Conflict, response);
            }
            return Ok();
        }
    }
}

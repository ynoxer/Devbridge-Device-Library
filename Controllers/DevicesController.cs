using System.Net;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Enums;
using Challenge202.TestDeviceBooking.Models;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Route("api/Devices")]
    public class DevicesController: Controller
    {
        private readonly IDevicesService _devicesService;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public DevicesController(IDevicesService devicesService, IMapper mapper, UserManager<User> userManager)
        {
            _devicesService = devicesService;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var devices = _devicesService.GetAll();

            var response = _mapper.Map<List<GetDevicesResponse>>(devices);

            return Ok(response);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _devicesService.GetById(id);
            if (item == null)
            {
                return NotFound();
            }
            
            var response = _mapper.Map<GetDevicesResponse>(item);
            return Ok(response);
        }

        [HttpPatch("Book/{id}")]
        public async Task<IActionResult> BookDevice(int id)
        {
            var device = _devicesService.GetById(id);
            if (device == null)
            {
                return NotFound();
            }

            var user = await _userManager.GetUserAsync(HttpContext.User);

            device = _devicesService.Book(device, user);

            var response = _mapper.Map<GetDevicesResponse>(device);

            return Ok(response);
        }

        [HttpPatch("Return/{id}")]
        public IActionResult ReturnDevice(int id)
        {
            var device = _devicesService.GetById(id);
            if (device == null)
            {
                return NotFound();
            }
            
            device = _devicesService.Return(device);

            var response = _mapper.Map<GetDevicesResponse>(device);

            return Ok(response);
        }


        [HttpPost("location")]
        public IActionResult ChangeLocation([FromBody] ChangeLocationRequest request)
        {
            var device = _devicesService.ChangeLocation(request);
            return Ok(device.Location.City);
        }

        [HttpPost]
        public async Task<IActionResult> CreateDevice([FromBody]CreateDeviceRequest request)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.GetUserAsync(HttpContext.User);
                var item = _devicesService.Create(request, user);

                var response = _mapper.Map<GetDevicesResponse>(item);
                return Ok(response);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}

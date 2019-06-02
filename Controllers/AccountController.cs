using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Challenge202.TestDeviceBooking.DataContracts.Requests;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Models;
using System.Threading.Tasks;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using Challenge202.TestDeviceBooking.DataContracts;
using System;
using System.Linq;

namespace Challenge202.TestDeviceBooking.Controllers
{

    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IOfficesService _officesService;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, IOfficesService officesService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _officesService = officesService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> login([FromBody] LoginRequest request)
        { 

            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            //LOGIN
            var result = await _signInManager.PasswordSignInAsync(request.UserName, request.Password, true, false);
            if (!result.Succeeded)
            {
                return StatusCode((int)HttpStatusCode.Conflict, new ErrorResponse
                {
                    ErrorMessage = "Invalid User Name or Password."
                });
            }

            var user = await _userManager.FindByNameAsync(request.UserName);  

            return Ok(new AuthResponse()
            {
                UserId = user.Id,
                UserName = user.Name
            });
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return NoContent();
        }

        [Authorize]
        [HttpGet("check")]
        public async Task<IActionResult> CheckAuth()
        {
            var user = await _userManager.GetUserAsync(HttpContext.User);

            if (user != null)
            {
                return Ok(new AuthResponse()
                {
                    UserId = user.Id,
                    UserName = user.Name
                });
            }
            else
            {
                return StatusCode((int)HttpStatusCode.Forbidden);
            }
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignUpRequest request)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var location = _officesService.GetById(request.LocationId.Value);
            if(location == null)
            {
                return NotFound();
            }

            var user = new User()
            {
                UserName = request.Email,
                Email = request.Email,
                Name = request.Name,
                SlackName = request.SlackName,
                Location = location,
                LockoutEnabled = false
            };

            var result = await _userManager.CreateAsync(user, request.Password);
            
            if (!result.Succeeded)
            {
                return StatusCode((int)HttpStatusCode.Conflict, new ErrorResponse
                {
                    ErrorMessage = string.Join(Environment.NewLine, result.Errors.Select(x => x.Description))
                });
            }

            return NoContent();
        }
    }

}

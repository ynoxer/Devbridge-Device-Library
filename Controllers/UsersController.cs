using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Responses;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {

        private readonly IUsersService _usersService;
        private readonly IMapper _mapper;

        public UsersController(IUsersService usersService, IMapper mapper)
        {
            _usersService = usersService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _usersService.GetAll();

            var response = _mapper.Map<List<GetUsersResponse>>(users);

            return Ok(response);
        }
    }
}

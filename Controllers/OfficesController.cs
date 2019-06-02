using System.Collections.Generic;
using AutoMapper;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Microsoft.AspNetCore.Mvc;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Route("api/Offices")]
    public class OfficesController: Controller
    {
        private readonly IOfficesService _officesService;
        private readonly IMapper _mapper;

        public OfficesController(IOfficesService officesService, IMapper mapper)
        {
            _officesService = officesService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var offices = _officesService.GetAll();
            
            var response = _mapper.Map<List<GetOfficesResponse>>(offices);

            return Ok(response);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var office = _officesService.GetById(id);

            if(office == null)
            {
                return NotFound();
            }

            var response = _mapper.Map<GetOfficeResponse>(office);

            return Ok(response);
        }
    }
}

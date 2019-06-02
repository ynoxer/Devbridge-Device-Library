using System.Collections.Generic;
using AutoMapper;
using Challenge202.TestDeviceBooking.DataContracts;
using Challenge202.TestDeviceBooking.DataContracts.Responses;
using Challenge202.TestDeviceBooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Challenge202.TestDeviceBooking.Controllers
{
    [Route("api/Events")]
    public class EventsController: Controller
    {
        private readonly IEventsService _eventsService;
        private readonly IMapper _mapper;

        public EventsController(IEventsService eventsService, IMapper mapper)
        {
            _eventsService = eventsService;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var events = _eventsService.GetAll();

            var response = _mapper.Map<ICollection<Event>, List<GetEventsResponseItem>>(events);
            
            return Ok(response);
        }
    }
}

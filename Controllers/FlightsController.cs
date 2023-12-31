﻿using Flights.Models;
using Microsoft.AspNetCore.Mvc;
using Flights.Dtos;

namespace Flights.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlightsController : ControllerBase
    {

        private readonly ILogger<FlightsController> _logger;

        static Random random = new Random();

        static private FlightModel[] flights = new FlightModel[]
            {
                new (
                    Guid.NewGuid(),
                    "SmartWings",
                    random.Next(100,6000).ToString(),
                    new TimePlaceModel("Wrocl aw", DateTime.Now.AddHours(random.Next(1,3))),
                    new TimePlaceModel("Bodrum", DateTime.Now.AddHours(random.Next(1,3))),
                    random.Next(1, 900)),
                  new (
                    Guid.NewGuid(),
                    "EnterAir",
                    random.Next(100,600).ToString(),
                    new TimePlaceModel("Warszawa", DateTime.Now.AddHours(random.Next(1,3))),
                    new TimePlaceModel("Krakow", DateTime.Now.AddHours(random.Next(1,3))),
                    random.Next(1, 300)),
                    new (
                    Guid.NewGuid(),
                    "American Airways",
                    random.Next(1000,6000).ToString(),
                    new TimePlaceModel("New York", DateTime.Now.AddHours(random.Next(1,3))),
                    new TimePlaceModel("Berlin", DateTime.Now.AddHours(random.Next(1,3))),
                    random.Next(1, 700)),
                      new (
                    Guid.NewGuid(),
                    "British Airways",
                    random.Next(90,900).ToString(),
                    new TimePlaceModel("Barcelona", DateTime.Now.AddHours(random.Next(1,3))),
                    new TimePlaceModel("Paris", DateTime.Now.AddHours(random.Next(1,3))),
                    random.Next(1, 500)),
                        new (
                    Guid.NewGuid(),
                    "Lufthanas",
                    random.Next(80,500).ToString(),
                    new TimePlaceModel("Boston", DateTime.Now.AddHours(random.Next(1,3))),
                    new TimePlaceModel("Texas", DateTime.Now.AddHours(random.Next(1,3))),
                    random.Next(1, 600)),
            };

        static private IList<BookDto> Bookings = new List<BookDto>();

        public FlightsController(ILogger<FlightsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(IEnumerable<FlightModel>), 200)]
        public IEnumerable<FlightModel> Search()
            => flights;


        [HttpGet("{id}")]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof (FlightModel), 200)]
        public ActionResult<FlightModel> Find(Guid id)
        {
            var flight = flights.SingleOrDefault(f => f.Id == id);

            if(flight == null)
            {
              return NotFound();
            }

            return Ok(flight);
        }

        [HttpPost]
        [ProducesResponseType(404)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(200)]
        public IActionResult Book(BookDto dto)
        {
            System.Diagnostics.Debug.WriteLine($"Booking a new flight {dto.FlightId}");

            var flightFound = flights.Any(f => f.Id == dto.FlightId);

            if(flightFound == false) 
            {
                return NotFound();
            }
            Bookings.Add(dto);
            return CreatedAtAction(nameof(Find), new { id = dto.FlightId });
        }
    }
}
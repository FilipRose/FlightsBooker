using Microsoft.AspNetCore.Mvc;
using Flights.Dtos;
using Flights.Models;

namespace Flights.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PassangerController : ControllerBase
    {
        static private IList<PassangerDto> Passangers =  new List<PassangerDto>(); 

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Register(PassangerDto dto)
        {
            Passangers.Add(dto);
            return CreatedAtAction(nameof(Find), new {email = dto.Email});
        }

        [HttpGet("{email}")]
        public ActionResult<PassangerModel> Find(string email)
        {
            var passanger = Passangers.FirstOrDefault(x => x.Email == email);

            if (passanger == null)
            {
                return NotFound();
            }

            var passangerModel = new PassangerModel(
                passanger.Email,
                passanger.FirstName,
                passanger.LastName,
                passanger.Gender);

            return Ok(passangerModel);  
        }
    }
}

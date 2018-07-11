using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.PublicationHouse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class PublicationHouseController : Controller
    {
        private PublicationHouseService _publicationHouseService;

        public PublicationHouseController(IConfiguration configuration)
        {
            _publicationHouseService = new PublicationHouseService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            return Ok(_publicationHouseService.GetAll());
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            return Ok(_publicationHouseService.Get(id));
        }

        [HttpPost, Authorize(Policy = "admin")]
        public IActionResult Create([FromBody] PublicationHouseCreateView publicationHouse)
        {
            _publicationHouseService.Create(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpPut, Authorize(Policy = "admin")]
        public IActionResult Update([FromBody] PublicationHouseUpdateView publicationHouse)
        {
            _publicationHouseService.Update(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpDelete("{id}"), Authorize(Policy = "admin")]
        public IActionResult Delete(int id)
        {
            var item = _publicationHouseService.Delete(id);
            return Ok(item);
        }
    }
}

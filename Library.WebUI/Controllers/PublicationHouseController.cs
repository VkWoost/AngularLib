using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.PublicationHouse;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class PublicationHouseController : Controller
    {
        private PublicationHouseService _publicationHouseService;

        public PublicationHouseController(LibraryContext context)
        {
            _publicationHouseService = new PublicationHouseService(context);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_publicationHouseService.GetAll());
        }

        [HttpGet("{id}")]
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
            var item = _publicationHouseService.Get(id);
            _publicationHouseService.Delete(id);
            return Ok(item);
        }
    }
}

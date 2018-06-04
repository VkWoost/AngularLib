using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.PublicationHouse;
using Microsoft.AspNetCore.Mvc;

namespace Library.WEB.Controllers
{
    [Route("api/[controller]")]
    public class PublicationHouseController : Controller
    {
        private PublicationHouseService _publicationHouseService;

        public PublicationHouseController(LibraryContext context)
        {
            _publicationHouseService = new PublicationHouseService(context);
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            return Ok(_publicationHouseService.GetAll());
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_publicationHouseService.Get(id));
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] PublicationHouseCreateView publicationHouse)
        {
            _publicationHouseService.Create(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpPut("[action]")]
        public IActionResult Update([FromBody] PublicationHouseUpdateView publicationHouse)
        {
            _publicationHouseService.Update(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpDelete("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            var item = _publicationHouseService.Get(id);
            _publicationHouseService.Delete(id);
            return Ok(item);
        }
    }
}
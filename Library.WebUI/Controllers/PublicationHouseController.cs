using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.ViewModels.PublicationHouseViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class PublicationHouseController : Controller
    {
        private IPublicationHouseService _publicationHouseService;

        public PublicationHouseController(PublicationHouseService publicationHouseService)
        {
            _publicationHouseService = publicationHouseService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var result = _publicationHouseService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(long id)
        {
            var result = _publicationHouseService.Get(id);
            return Ok(result);
        }

        [HttpPost, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Create([FromBody] CreatePublicationHouseViewModel publicationHouse)
        {
            _publicationHouseService.Create(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpPut, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Update([FromBody] UpdatePublicationHouseViewModel publicationHouse)
        {
            _publicationHouseService.Update(publicationHouse);
            return Ok(publicationHouse);
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Delete(long id)
        {
            var item = _publicationHouseService.Delete(id);
            return Ok(item);
        }
    }
}

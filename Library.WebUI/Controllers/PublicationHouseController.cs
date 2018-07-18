using Library.BusinessLogic.Services;
using Library.ViewModels.PublicationHouseViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class PublicationHouseController : Controller
    {
        private PublicationHouseService _publicationHouseService;

        public PublicationHouseController(PublicationHouseService publicationHouseService)
        {
            _publicationHouseService = publicationHouseService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _publicationHouseService.GetAll();
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(long id)
        {
            try
            {
                var result = _publicationHouseService.Get(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPost, Authorize(Policy = nameof(ApplicationRoles.admin))]
        public IActionResult Create([FromBody] CreatePublicationHouseViewModel publicationHouse)
        {
            try
            {
                _publicationHouseService.Create(publicationHouse);
                return Ok(publicationHouse);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpPut, Authorize(Policy = nameof(ApplicationRoles.admin))]
        public IActionResult Update([FromBody] UpdatePublicationHouseViewModel publicationHouse)
        {
            try
            {
                _publicationHouseService.Update(publicationHouse);
                return Ok(publicationHouse);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(ApplicationRoles.admin))]
        public IActionResult Delete(long id)
        {
            try
            {
                var item = _publicationHouseService.Delete(id);
                return Ok(item);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

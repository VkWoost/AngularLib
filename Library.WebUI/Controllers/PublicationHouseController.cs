using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.ViewModels.PublicationHouseViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]"), Authorize]
    public class PublicationHouseController : Controller
    {
        private IPublicationHouseService _publicationHouseService;
        private readonly ILogger<PublicationHouseController> _logger;

        public PublicationHouseController(IPublicationHouseService publicationHouseService, ILogger<PublicationHouseController> logger)
        {
            _publicationHouseService = publicationHouseService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var result = _publicationHouseService.GetAll();
                return Ok(result);
            }
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            try
            {
                var result = _publicationHouseService.Get(id);
                return Ok(result);
            }
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
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
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
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
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(ApplicationRoles.admin))]
        public IActionResult Delete(long id)
        {
            try
            {
                var result = _publicationHouseService.Delete(id);
                return Ok(result);
            }
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}

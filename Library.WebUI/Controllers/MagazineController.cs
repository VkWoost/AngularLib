using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.ViewModels.MagazineViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]"), Authorize]
    public class MagazineController : Controller
    {
        private IMagazineService _magazineService;
        private readonly ILogger<MagazineController> _logger;


        public MagazineController(IMagazineService magazineService, ILogger<MagazineController> logger)
        {
            _magazineService = magazineService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var result = _magazineService.GetAll();
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
                var result = _magazineService.Get(id);
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
        public IActionResult Create([FromBody] CreateMagazineViewModel magazine)
        {
            try
            {
                _magazineService.Create(magazine);
                return Ok(magazine);
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
        public IActionResult Update([FromBody] UpdateMagazineViewModel magazine)
        {
            try
            {
                _magazineService.Update(magazine);
                return Ok(magazine);
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
                var result = _magazineService.Delete(id);
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

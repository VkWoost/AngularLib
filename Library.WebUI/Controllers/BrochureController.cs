using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.ViewModels.BrochureViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]"), Authorize]
    public class BrochureController : Controller
    {
        private IBrochureService _brochureService;
        private readonly ILogger<BrochureController> _logger;

        public BrochureController( IBrochureService brochureService, ILogger<BrochureController> logger)
        {
            _brochureService = brochureService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var result = _brochureService.GetAll();
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
        public IActionResult Get(int id)
        {
            try
            {
                var result = _brochureService.Get(id);
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
        public IActionResult Create([FromBody] CreateBrochureViewModel brochure)
        {
            try
            {
                _brochureService.Create(brochure);
                return Ok(brochure);
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
        public IActionResult Update([FromBody] BrochureUpdateView brochure)
        {
            try
            {
                _brochureService.Update(brochure);
                return Ok(brochure);
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
        public IActionResult Delete(int id)
        {
            try
            {
                var result = _brochureService.Delete(id);
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

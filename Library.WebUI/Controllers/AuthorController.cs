using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.ViewModels.AuthorViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]"), Authorize]
    public class AuthorController : Controller
    {
        private IAuthorService _authorService;
        private readonly ILogger<AuthorController> _logger;

        public AuthorController(IAuthorService authorService, ILogger<AuthorController> logger)
        {
            _authorService = authorService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var result = _authorService.GetAll();
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
                var result = _authorService.Get(id);
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
        public IActionResult Create([FromBody] CreateAuthorViewModel author)
        {
            try
            {
                _authorService.Create(author);
                return Ok(author);
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
        public IActionResult Update([FromBody] UpdateAuthorViewModel author)
        {
            try
            {
                _authorService.Update(author);
                return Ok(author);
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
                var result = _authorService.Delete(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

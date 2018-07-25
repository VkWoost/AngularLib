using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.ViewModels.BookViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]"), Authorize]
    public class BookController : Controller
    {
        private IBookService _bookService;
        private readonly ILogger<BookController> _logger;

        public BookController(IBookService bookService, ILogger<BookController> logger)
        {
            _bookService = bookService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var result = _bookService.GetAll();
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
                var result = _bookService.Get(id);
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
        public IActionResult Create([FromBody] CreateBookViewModel book)
        {
            try
            {
                _bookService.Create(book);
                return Ok(book);
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
        public IActionResult Update([FromBody] UpdateBookViewModel book)
        {
            try
            {
                _bookService.Update(book);
                return Ok(book);
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
                var result = _bookService.Delete(id);
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

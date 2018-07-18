using Library.BusinessLogic.Services;
using Library.ViewModels.BookViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private BookService _bookService;

        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _bookService.GetAll();
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _bookService.Get(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
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
            catch (Exception exception)
            {
                return BadRequest(exception);
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
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(ApplicationRoles.admin))]
        public IActionResult Delete(int id)
        {
            try
            {
                var item = _bookService.Delete(id);
                return Ok(item);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

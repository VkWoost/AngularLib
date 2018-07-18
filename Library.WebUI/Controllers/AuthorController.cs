using Library.BusinessLogic.Services;
using Library.ViewModels.AuthorViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : Controller
    {
        private AuthorService _authorService;

        public AuthorController(AuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _authorService.GetAll();
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
                var result = _authorService.Get(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
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
            catch (Exception exception)
            {
                return BadRequest(exception);
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
                var item = _authorService.Delete(id);
                return Ok(item);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

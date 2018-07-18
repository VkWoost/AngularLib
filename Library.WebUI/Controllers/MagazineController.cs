using Library.BusinessLogic.Services;
using Library.ViewModels.MagazineViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class MagazineController : Controller
    {
        private MagazineService _magazineService;

        public MagazineController(MagazineService magazineService)
        {
            _magazineService = magazineService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _magazineService.GetAll();
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
                var result = _magazineService.Get(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
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
            catch (Exception exception)
            {
                return BadRequest(exception);
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
                var item = _magazineService.Delete(id);
                return Ok(item);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

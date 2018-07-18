using Library.BusinessLogic.Services;
using Library.ViewModels.BrochureViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class BrochureController : Controller
    {
        private BrochureService _brochureService;

        public BrochureController( BrochureService brochureService)
        {
            _brochureService = brochureService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            try
            {
                var result = _brochureService.GetAll();
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
                var result = _brochureService.Get(id);
                return Ok(result);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
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
            catch (Exception exception)
            {
                return BadRequest(exception);
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
                var item = _brochureService.Delete(id);
                return Ok(item);
            }
            catch (Exception exception)
            {
                return BadRequest(exception);
            }
        }
    }
}

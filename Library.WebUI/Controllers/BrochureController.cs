using Library.BusinessLogic.Services;
using Library.ViewModels.BrochureViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
            var result = _brochureService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var result = _brochureService.Get(id);
            return Ok(result);
        }

        [HttpPost, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Create([FromBody] CreateBrochureViewModel brochure)
        {
            _brochureService.Create(brochure);
            return Ok(brochure);
        }

        [HttpPut, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Update([FromBody] BrochureUpdateView brochure)
        {
            _brochureService.Update(brochure);
            return Ok(brochure);
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Delete(int id)
        {
            var item = _brochureService.Delete(id);
            return Ok(item);
        }
    }
}

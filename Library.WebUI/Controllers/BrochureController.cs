using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.ViewModels.BrochureViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class BrochureController : Controller
    {
        private IBrochureService _brochureService;

        public BrochureController(IConfiguration configuration)
        {
            _brochureService = new BrochureService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var res = _brochureService.GetAll();
            return Ok(res);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var res = _brochureService.Get(id);
            return Ok(res);
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

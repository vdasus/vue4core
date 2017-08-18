using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace vue4core.Controllers
{
    public class TestController : Controller
    {
        private readonly IStringLocalizer<HomeController> _localizer;

        public TestController(IStringLocalizer<HomeController> localizer)
        {
            _localizer = localizer;
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        [HttpGet]
        public IActionResult GetTestResponseCached(string id = "0")
        {
            return GetTestResponse(id);
        }

        [HttpGet]
        public IActionResult GetTestResponse(string id = "0")
        {
            var tmpSec = int.Parse(id);
            if (tmpSec != 0) Thread.Sleep(tmpSec * 1000);
            return Json(string.Format(_localizer["Test got from Api {0} (Last updated: {1:u})"], id, DateTime.Now));
        }
    }
}

using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

namespace vue4core.Controllers
{
    public class TestController : Controller
    {

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult Index()
        {
            ViewBag.Title = "Test/Index";
            return View();
        }

        [HttpGet]
        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult GetTestResponse(int delaySec)
        {
            if (delaySec != 0) Thread.Sleep(delaySec * 1000);
            return Json($"Test got from Test Api (Last updated: {DateTime.Now:u})");
        }
    }
}

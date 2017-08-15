using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;

namespace vue4core.Controllers
{
    public class HomeController : Controller
    {
        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult Index()
        {
            return View();
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        [ResponseCache(Duration = 60, Location = ResponseCacheLocation.Any)]
        public IActionResult Error()
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
            return Json($"Test got from Api {id} (Last updated: {DateTime.Now:u})");
        }
    }
}

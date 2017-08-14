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

        [HttpGet]
        public IActionResult GetTestResponse(int delaySec = 0)
        {
            if(delaySec !=0) Thread.Sleep(delaySec * 1000);
            return Json($"Test got from Api (Last updated: {DateTime.Now:u})");
        }
    }
}

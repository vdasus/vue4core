using Microsoft.AspNetCore.Mvc;

namespace vue4core.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.Title = "Test/Index";
            return View();
        }

        [HttpGet]
        public IActionResult GetTestResponse()
        {
            return Json("Test got from Test Api");
        }
    }
}

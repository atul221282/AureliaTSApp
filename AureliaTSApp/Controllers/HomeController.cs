
using AureliaTSApp.Models;
using System.Web.Mvc;

namespace AureliaTSApp
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetMain()
        {
            return PartialView();
        }

        public ActionResult GetLoginModel()
        {
            var model = new LoginModel { UserName = "atul2212", Password = "121212" };
            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}

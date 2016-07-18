using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace AureliaTSApp.Controllers
{
    public class TemplateController: Controller
    {
        public async Task<ActionResult> Render(string feature, string name)
        {
            return PartialView(await Task.FromResult<string>($"~/src/{feature}/{name}.cshtml"));
        }
    }
}
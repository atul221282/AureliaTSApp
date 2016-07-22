using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace AureliaTSApp.Controllers
{
    public class TemplateController : Controller
    {
        [AllowAnonymous]
        public async Task<ActionResult> Render(string feature, string name)
        {
            if (!string.IsNullOrEmpty(name))
                return PartialView(await Task.FromResult<string>($"~/dist/{feature}/{name}.cshtml"));
            else
                return PartialView(await Task.FromResult<string>($"~/dist/{feature}.cshtml"));
        }
    }
}
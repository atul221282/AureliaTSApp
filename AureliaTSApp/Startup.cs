using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AureliaTSApp
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            //Add MVC module and specify Root
            app.UseMvc();
            app.UseCors("AlowAll");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace engWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AuthenticationController : ApiController
    {
        [HttpPost]
        public object login(dynamic data)
        {
            var nome = data.username;
            var pass = data.password;

            return new { token = "ENGWORKSHOP" };
        }

        [HttpGet]
        public object testAuth(string message)
        {
            var auth = HttpContext.Current.Request.Headers["Authorization"];

            return "Test";
        }
    }
}

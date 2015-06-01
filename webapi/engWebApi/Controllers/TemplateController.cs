using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace engWebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TemplateController : ApiController
    {
        [HttpGet]
        public object Get()
        {
            return "Questa è una prova";
        }
    }
}

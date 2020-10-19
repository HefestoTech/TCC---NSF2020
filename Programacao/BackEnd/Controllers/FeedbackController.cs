using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace BackEnd.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        Business.FeedbackBusiness business = new Business.FeedbackBusiness();
       
        [HttpPost]
        public Models.TbConsulta AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            return business.AvaliarConsulta(feedback);
        }
        
    }
}
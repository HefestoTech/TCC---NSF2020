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

        Utils.GeralConversor conversor = new Utils.GeralConversor();
       
        [HttpPost]
        public ActionResult<Models.Response.SucessoResponse> AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            try
            {
                business.AvaliarConsulta(feedback);
                return new Models.Response.SucessoResponse("A consulta foi avaliada com sucesso");
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }
        
    }
}
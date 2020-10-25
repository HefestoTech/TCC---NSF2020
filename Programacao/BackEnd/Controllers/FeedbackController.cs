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
        public ActionResult<Models.Response.ConsultaResponse> AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            try
            {
                Models.TbConsulta consulta = business.AvaliarConsulta(feedback);
                Models.Response.ConsultaResponse consultaResponse = conversor.ParaConsultaResponse(consulta);
                return consultaResponse;

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
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
    public class AgendamentoController : ControllerBase
    {
        Business.AgendamentoBusiness business = new Business.AgendamentoBusiness();
        Utils.GeralConversor conversor = new Utils.GeralConversor();
        
        [HttpGet("ValorDaConsulta")]
        public ActionResult<Models.Response.ValoresDaConsulta> PegarValorDaConsulta (Models.Request.ValoresDaConsultaRequest request)
        {
            try
            {
                Models.TbServico servico = business.PegarValorDaConsulta(request.IdServico);
                return conversor.TransformarParaValoresDaConsulta(servico, request);
            }
            catch (System.Exception ex)
            {
                return BadRequest( new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }   
        }
       
        [HttpPost("cadastrar/agendamento/cliente")]
        public ActionResult<Models.TbConsulta> AgendarNovaConsultaCliente (Models.Request.NovaConsultaClienteRequest request)
        {
            try
            {
                Models.TbConsulta consulta = conversor.ParaTbConsulta(request);
                return business.AgendarNovaConsultaCliente(consulta); 
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpPut("Remarcar")]
        public ActionResult<Models.Response.SucessoResponse> RemarcarConsulta (Models.Request.RemarcacaoRequest request)
        {
            try
            {
                business.RemarcarConsulta(request);
                return new Models.Response.SucessoResponse("Remarcado com sucesso!!!"); 
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
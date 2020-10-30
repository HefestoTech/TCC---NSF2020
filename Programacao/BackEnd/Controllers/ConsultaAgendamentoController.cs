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

    public class ConsultaAgendamentoController : ControllerBase
    {
        Business.ConsultaAgendamentoBusiness business = new Business.ConsultaAgendamentoBusiness();
        Utils.GeralConversor conversor = new Utils.GeralConversor();
        
        
        [HttpGet("agendados/cliente/{idCliente}")]
        public ActionResult<Models.Response.AgendadosSeparadosPorSituacao> AgendadosDoCLiente (int idCliente)
        {
            try
            {
                List<Models.TbConsulta> consultas = business.AgendadosDoCLiente(idCliente);
                return conversor.OrganizadorListarConsultas(consultas);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                 ex.Message, 400
                ));
            }
        }


        [HttpGet("agendados/filtro")]
        public List<Models.Response.AgendadosResponse> AgendadosPorFiltro (string nome, string servico, string doutor, DateTime data, string situacao)
        {
           

            List<Models.TbConsulta> listaDeConsultas = business.AgendadosPorFiltro(nome, servico, doutor, data, situacao);
            return conversor.ParaAgendadadosResponse(listaDeConsultas);
        }

       

        
    }
}
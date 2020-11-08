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
    public class RelatorioController : ControllerBase
    {
       Utils.RelatorioConversor conversor = new Utils.RelatorioConversor();
       Business.RelatorioBusiness relatorioBusiness = new Business.RelatorioBusiness();

       [HttpGet("pegarPorDia")]
        public ActionResult<List<Models.Response.RelatorioVendaPorDiaResponse>> RelatorioPorDia (DateTime dia)
        {
            try
            {
                List<Models.TbConsulta> consultas = relatorioBusiness.RelatorioPorDia(dia);

                return conversor.ParaRelatorioVendaPorDia(consultas);
                
            }
            catch (System.Exception ex)
            {
                
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpGet("pegarPorMes")]
        public ActionResult<List<Models.Response.RelatorioVendaPorMesResponse>> RelatorioVendaPorMes (int mesInicio, int mesFinal)
        {
            try
            {
                List<Models.TbConsulta> consultas = relatorioBusiness.RelatorioVendaPorMes(mesInicio, mesFinal);
                return conversor.ParaRelatorioVendaPorMes(mesInicio, mesFinal, consultas);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpGet("TopClientes")]
        public ActionResult<List<Models.Response.RelatorioTopClientes>> PegarTopCliente ()
        {

            try
            {
                List<Models.TbCliente> clientes = relatorioBusiness.PegarTopCliente();
                return conversor.ParaTopClientesResponse(clientes);
            }
            catch (System.Exception ex)
            {
               return BadRequest(new Models.Response.ErroResponse(
                   ex.Message, 400
               ));
            }

        }

        [HttpGet("TopServicos")]
        public ActionResult<List<Models.Response.RelatorioTopServicos>> PegarTopServicos ()
        {
            try
            {
                List<Models.TbServico> servicos = relatorioBusiness.PegarTopServicos();
                return conversor.ParaTopServicosResponse(servicos);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpGet("MediaFuncionarios")]
        public ActionResult<List<Models.Response.MediaFuncionarioResponse>> PegarNotaMedia () 
        {
            try
            {
                List<Models.TbFuncionario> funcionarios = relatorioBusiness.PegarNotaMedia();
                return conversor.ParaMediaFuncionarioResponsse(funcionarios);
            }
            catch (System.Exception ex)
            {
                return BadRequest (new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }


    
    
    
    
    }
}
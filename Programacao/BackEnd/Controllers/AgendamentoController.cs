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
        Business.EnviarEmailBusiness enviarEmailBusiness = new Business.EnviarEmailBusiness();
        Utils.GeralConversor conversor = new Utils.GeralConversor();
        
        [HttpGet("Dentista/Disponivel")]
        public ActionResult<List<Models.Response.DentistaResponse>> ListarDentistasDisponiveis (Models.Request.HorarioRequest horario)
        {
             List<Models.TbFuncionario> funcionarios = business.ListarDentistasDisponiveis(horario.Horario);
             return conversor.ParaListaDentistasResponse(funcionarios);
        }
        
        [HttpGet("ValorDaConsulta")]
        public ActionResult<Models.Response.ValoresDaConsulta> PegarValorDaConsulta (Models.Request.ValoresDaConsultaRequest request)
        {
            try
            {
                Models.TbServico servico = business.PegarValorDaConsulta(request);
                return business.TransformarParaValoresDaConsulta(servico, request);
            }
            catch (System.Exception ex)
            {
                return BadRequest( new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }   
        }
       
        [HttpPost("cadastrar/cliente")]
        public ActionResult<Models.Response.ConsultaResponse> AgendarNovaConsultaCliente (Models.Request.NovaConsultaClienteRequest request)
        {
            try
            {
                Models.TbConsulta consulta = conversor.ClienteParaTbConsulta(request);
                
                consulta = business.AgendarNovaConsulta(consulta, null); 
               
                Models.Response.ConsultaResponse consultaResponse = conversor.ParaConsultaResponse(consulta);

                enviarEmailBusiness.EnviarEmailDeAgendamentoDaConsulta(consultaResponse);
                return consultaResponse;
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpPut("Remarcar")]
        public ActionResult<Models.Response.ConsultaResponse> RemarcarConsulta (Models.Request.RemarcacaoRequest request)
        {
            try
            {
                Models.TbConsulta consulta = business.RemarcarConsulta(request);
                Models.Response.ConsultaResponse response = conversor.ParaConsultaResponse(consulta);
                enviarEmailBusiness.EnviarEmailDeRemarcacaoDaConsulta(response);
                return response; 
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpPost("cadastrar/funcionario")]
        public ActionResult<Models.Response.ConsultaResponse> AgendarNovaConsultaFuncionario (Models.Request.NovaConsultaFuncionarioRequest request)
        {
            try
            {
                Models.TbConsulta tbConsulta = conversor.FuncionarioParaTbConsulta(request);
              
                Models.TbConsulta consultaAgendada = business.AgendarNovaConsulta(tbConsulta, request.EmailCliente);
                
                Models.Response.ConsultaResponse response = conversor.ParaConsultaResponse(consultaAgendada);

                enviarEmailBusiness.EnviarEmailDeAgendamentoDaConsulta(response);
                
                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpPut("cancelar/{idconsulta}")]
        public ActionResult<Models.Response.SucessoResponse> CancelarConsulta (int idconsulta)
        {
            try
            {
                Models.TbConsulta consulta = business.CancelarConsulta(idconsulta);

                Models.Response.ConsultaResponse consultaResponse = conversor.ParaConsultaResponse(consulta);

                enviarEmailBusiness.EnviarEmailDeCancelamentoDaConsulta(consultaResponse);

                return new Models.Response.SucessoResponse("Consulta cancelada com sucesso");
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    ex.Message, 400
                ));
            }
        }

        [HttpPut("alterar/situacao/{idConsulta}")]
        public ActionResult<Models.Response.SucessoResponse> AlterarSituação (int idConsulta, string novaSituacao)
        {
            try
            {
                Models.TbConsulta consulta = business.AlterarSituação(idConsulta, novaSituacao);

                if(consulta.DsSituacao == "Concluido")
                {
                    Models.Response.ConsultaResponse consultaResponse = conversor.ParaConsultaResponse(consulta);
                    enviarEmailBusiness.EnviarEmailDeAvaliacaoDaConsulta(consultaResponse);
                }

                return new Models.Response.SucessoResponse("Situação da consulta alterada com sucesso!");
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
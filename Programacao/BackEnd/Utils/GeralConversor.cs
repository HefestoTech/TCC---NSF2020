using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Utils
{
    public class GeralConversor
    {

        Database.LoginDatabase dbLogin = new Database.LoginDatabase();

        public List<Models.Response.ServicoResponse> ParaServicoResponse (List<Models.TbServico> servicos)
        {
            List<Models.Response.ServicoResponse> servicoResponse = new List<Models.Response.ServicoResponse>();

            foreach(Models.TbServico item in servicos)
            {
                Models.Response.ServicoResponse servicoItem = new Models.Response.ServicoResponse();

                servicoItem.IdServico = item.IdServico;
                servicoItem.NomeServico = item.NmServico;

                servicoResponse.Add(servicoItem);
            }

            return servicoResponse;
        }

        public List<Models.Response.DentistaResponse> ParaListaDentistasResponse (List<Models.TbFuncionario> funcionarios)
        {
            List<Models.Response.DentistaResponse> dentistaResponse = new List<Models.Response.DentistaResponse>();

            foreach(Models.TbFuncionario item in funcionarios)
            {
                Models.Response.DentistaResponse resp = new Models.Response.DentistaResponse();
                resp.Id = item.IdFuncionario;
                resp.Nome = item.NmFuncionario;
                dentistaResponse.Add(resp);
            }

            return dentistaResponse;
        }

        public Models.Response.LoginResponse ParaLoginResponse (Models.TbLogin login)
        {
       
            Models.Response.LoginResponse loginResponse = new Models.Response.LoginResponse();

            loginResponse.IdLogin = login.IdLogin; 
            loginResponse.Perfil = login.DsPerfil;
            loginResponse.Email = login.DsEmail;

            if(loginResponse.Perfil == "Cliente")
            {
                Models.TbCliente cliente = dbLogin.PegarInformacoesCliente(login.IdLogin);
                loginResponse.Nome = cliente.NmCliente;
                loginResponse.IdUsuario = cliente.IdCliente;
            }
            
            if(loginResponse.Perfil == "Funcionário")
            {
                Models.TbFuncionario funcionario = dbLogin.PegarInformacoesFuncionario(login.IdLogin);
                loginResponse.Nome = funcionario.NmFuncionario;
                loginResponse.IdUsuario = funcionario.IdFuncionario;
            }

            return loginResponse;
            
        }

        public Models.TbConsulta ClienteParaTbConsulta (Models.Request.NovaConsultaClienteRequest request)
        {
            Models.TbConsulta NovaConsulta = new Models.TbConsulta();
            
            NovaConsulta.IdFuncionario = request.IdFuncionario;
            NovaConsulta.IdCliente = request.IdCliente;
            NovaConsulta.IdServico = request.IdServico;
            NovaConsulta.DsSituacao = "Agendado";
            NovaConsulta.DtConsulta = request.Data;
            NovaConsulta.DtInclusao = DateTime.Now;
            NovaConsulta.NrParcelas = request.QtdParcelas;
            NovaConsulta.TpFormaPagamento = request.FormaDePagamento;
            NovaConsulta.VlDesconto = request.Desconto;
            NovaConsulta.VlSubtotal = request.SubTotal;
            NovaConsulta.VlTotal = request.ValorTotal;
            NovaConsulta.VlTotalPorMes = request.ValorTotal / request.QtdParcelas;
            
            return NovaConsulta;
        }

         public Models.TbConsulta FuncionarioParaTbConsulta (Models.Request.NovaConsultaFuncionarioRequest request)
        {
            Models.TbConsulta NovaConsulta = new Models.TbConsulta();
            
            NovaConsulta.IdFuncionario = request.IdFuncionario;
            NovaConsulta.DsSituacao = "Agendado";
            NovaConsulta.DtConsulta = request.Data;
            NovaConsulta.DtInclusao = DateTime.Now;
            NovaConsulta.IdFuncionario = request.IdFuncionario;
            NovaConsulta.IdServico = request.IdServico;
            NovaConsulta.NrParcelas = request.QtdParcelas;
            NovaConsulta.TpFormaPagamento = request.FormaDePagamento;
            NovaConsulta.VlDesconto = request.Desconto;
            NovaConsulta.VlSubtotal = request.SubTotal;
            NovaConsulta.VlTotal = request.ValorTotal;
            NovaConsulta.VlTotalPorMes = request.ValorTotal / request.QtdParcelas;
            
            return NovaConsulta;
        }

        
        public Models.Response.ConsultaResponse ParaConsultaResponse (Models.TbConsulta consulta)
        {
            Models.Response.ConsultaResponse consultaResponse = new Models.Response.ConsultaResponse();
            consultaResponse.Email = consulta.IdClienteNavigation.IdLoginNavigation.DsEmail;
            consultaResponse.HorarioConsulta = consulta.DtConsulta;
            consultaResponse.HorarioInclusao = consulta.DtInclusao;
            consultaResponse.NomeCliente = consulta.IdClienteNavigation.NmCliente;
            consultaResponse.NomeFuncionario = consulta.IdFuncionarioNavigation.NmFuncionario;
            consultaResponse.Servico = consulta.IdServicoNavigation.NmServico;
            return consultaResponse;
        }

        public Models.TbLogin ParaTbLogin (Models.Request.CadastrarClienteRequest cadastroRequest)
        {
            Models.TbLogin tbLogin = new Models.TbLogin();
            tbLogin.DsEmail = cadastroRequest.Email;
            tbLogin.DsPerfil = "Cliente";
            tbLogin.DsSenha =cadastroRequest.Senha;
            return tbLogin;
        }

        public Models.TbCliente ParaTbCliente (Models.Request.CadastrarClienteRequest cadastroRequest)
        {
            Models.TbCliente tbCliente = new Models.TbCliente();
            tbCliente.DsCep = cadastroRequest.CEP;
            tbCliente.DsCidade = cadastroRequest.Cidade;
            tbCliente.DsComplemento = cadastroRequest.Complemento;
            tbCliente.DsCpf = cadastroRequest.CPF;
            tbCliente.DsEstado = cadastroRequest.Estado;
            tbCliente.DsLougradouro = cadastroRequest.Logradouro;
            tbCliente.DsSexo = cadastroRequest.Sexo;
            tbCliente.DsTelefone = cadastroRequest.Telefone;
            tbCliente.DtNascimento = cadastroRequest.Nascimento;
            tbCliente.NmCliente = cadastroRequest.Nome;
            tbCliente.NrResidenical = cadastroRequest.NumeroResidencial;
            return tbCliente;
        }
        

        public Models.Response.AgendadosSeparadosPorSituacao OrganizadorListarConsultas (List<Models.TbConsulta> listaDeConsultas)
        {
            List<Models.Response.AgendadosResponse> agendadosResponse = this.ParaAgendadadosResponse(listaDeConsultas);
            
            return this.AgendadosSeparadosPorSituacao(agendadosResponse);
        }

        public List<Models.Response.AgendadosResponse> ParaAgendadadosResponse (List<Models.TbConsulta> listaDeConsultas)
        {
            List<Models.Response.AgendadosResponse> agendadosResponse = new List<Models.Response.AgendadosResponse>();

            foreach(Models.TbConsulta item in listaDeConsultas)
            {
                Models.Response.AgendadosResponse response = new Models.Response.AgendadosResponse();
                response.Data = item.DtConsulta;
                response.Desconto = item.VlDesconto;
                response.Doutor = item.IdFuncionarioNavigation.NmFuncionario;
                response.FormaPagamento = item.TpFormaPagamento;
                response.IdConsulta = item.IdConsulta;
                response.NomeCliente = item.IdClienteNavigation.NmCliente;
                response.Servico = item.IdServicoNavigation.NmServico;
                response.Situacao = item.DsSituacao;
                response.Subtotal = item.VlSubtotal;
                response.ValorTotal = item.VlTotal;
                response.TotalPorMes = item.VlTotalPorMes;
                response.Parcelas = item.NrParcelas;
                response.Nota = item.NrNota;
                response.Comentario = item.DsComentarioFeedback;
                
                agendadosResponse.Add(response);
            }

            return agendadosResponse.OrderByDescending( x => x.Data).ToList();
        }


     
        public Models.Response.AgendadosSeparadosPorSituacao AgendadosSeparadosPorSituacao(List<Models.Response.AgendadosResponse> agendadosResponse)
        {

            Models.Response.AgendadosSeparadosPorSituacao separadosPorSituacao = new Models.Response.AgendadosSeparadosPorSituacao();
            separadosPorSituacao.Agendados = new List<Models.Response.AgendadosResponse>();
            separadosPorSituacao.Cancelados = new List<Models.Response.AgendadosResponse>();
            separadosPorSituacao.Concluidos = new List<Models.Response.AgendadosResponse>();
            separadosPorSituacao.NaoCompareceu = new List<Models.Response.AgendadosResponse>();

            foreach(Models.Response.AgendadosResponse item in agendadosResponse)
            {
                if(item.Situacao == "Concluido")
                    separadosPorSituacao.Concluidos.Add(item);

                else if(item.Situacao == "Agendado")
                    separadosPorSituacao.Agendados.Add(item);

                else if(item.Situacao == "Cancelado")
                    separadosPorSituacao.Cancelados.Add(item);

                else if(item.Situacao == "Não Compareceu")
                    separadosPorSituacao.NaoCompareceu.Add(item);        
            }

            return separadosPorSituacao;

        }
 
 
    }

}
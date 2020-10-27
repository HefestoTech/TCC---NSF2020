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

        public Models.Response.ValoresDaConsulta TransformarParaValoresDaConsulta (Models.TbServico servico, Models.Request.ValoresDaConsultaRequest request)
        {
            Models.Response.ValoresDaConsulta valores = new Models.Response.ValoresDaConsulta();
            
            valores.Subtotal = servico.VlPrecoServico;
            
            if(request.FormaDePagamento == "Dinheiro")
            {
              valores.Desconto = 10 * servico.VlPrecoServico / 100;
              valores.ValorParcelado = 0;
              valores.Total = servico.VlPrecoServico - valores.Desconto;
            }
            else 
            {
              valores.Desconto = 0;
              valores.Total = servico.VlPrecoServico - valores.Desconto;
              valores.ValorParcelado = valores.Total / request.QuantidadeParcelas;
            }
            
            return valores;
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
    }
}
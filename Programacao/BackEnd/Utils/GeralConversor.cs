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
            NovaConsulta.DsSituacao = "Agendado";
            NovaConsulta.DtConsulta = request.Data;
            NovaConsulta.DtInclusao = DateTime.Now;
            NovaConsulta.IdCliente = request.IdCliente;
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

         public Models.TbConsulta FuncionarioParaTbConsulta (Models.Request.NovaConsultaFuncionarioRequest request)
        {
            Models.TbConsulta NovaConsulta = new Models.TbConsulta();
            
            NovaConsulta.IdFuncionario = request.IdFuncionario;
            NovaConsulta.DsSituacao = "Agendado";
            NovaConsulta.DtConsulta = request.Data;
            NovaConsulta.DtInclusao = DateTime.Now;
            NovaConsulta.IdCliente = request.IdCliente;
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
    }
}
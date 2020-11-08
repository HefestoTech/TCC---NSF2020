using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Utils
{
    public class RelatorioConversor
    {

        Models.db_odontoContext ctx = new Models.db_odontoContext();
        public List<Models.Response.RelatorioVendaPorDiaResponse> ParaRelatorioVendaPorDia (List<Models.TbConsulta> consultas)
        {
            List<Models.Response.RelatorioVendaPorDiaResponse> relatorioVendaPorDia = new List<Models.Response.RelatorioVendaPorDiaResponse>();

            foreach(Models.TbConsulta item in consultas)
            {
                Models.Response.RelatorioVendaPorDiaResponse relatorio = new Models.Response.RelatorioVendaPorDiaResponse();

                relatorio.Cliente = item.IdClienteNavigation.NmCliente;
                relatorio.Dia = item.DtConsulta.Day;
                relatorio.TotalVenda = item.VlTotal;
                relatorio.Hora = item.DtConsulta;

                relatorioVendaPorDia.Add(relatorio);
            }

            return relatorioVendaPorDia.OrderBy(x => x.Hora).ToList();
        }

        public List<Models.Response.RelatorioVendaPorMesResponse> ParaRelatorioVendaPorMes(int mesIncio, int MesFinal, List<Models.TbConsulta> consultas)
        {
            List<Models.Response.RelatorioVendaPorMesResponse> relatorioVendaPorMes = new List<Models.Response.RelatorioVendaPorMesResponse>();
            
            for(int i = mesIncio; i <= MesFinal; i++)
            {
                Models.Response.RelatorioVendaPorMesResponse relatorioResponse = new Models.Response.RelatorioVendaPorMesResponse();

                List<Models.TbConsulta> consultasSeparasPorMes = consultas.Where(x => x.DtConsulta.Month == i).ToList();

                relatorioResponse.Mes = i;
                relatorioResponse.QtdVendas = consultasSeparasPorMes.Count;
                relatorioResponse.TotalVenda = consultasSeparasPorMes.Sum(x => x.VlTotal);

                relatorioVendaPorMes.Add(relatorioResponse);  
            }

            return relatorioVendaPorMes;
        }

        public List<Models.Response.RelatorioTopClientes> ParaTopClientesResponse (List<Models.TbCliente> clientes)
        {
            List<Models.Response.RelatorioTopClientes> relatorioTopClientes = new List<Models.Response.RelatorioTopClientes>();

            foreach(Models.TbCliente item in clientes)
            {
                Models.Response.RelatorioTopClientes topClientes = new Models.Response.RelatorioTopClientes();

                List<Models.TbConsulta> consultas = ctx.TbConsulta.Where( x => x.IdCliente == item.IdCliente).ToList();

                topClientes.Email = item.IdLoginNavigation.DsEmail;
                topClientes.Nome = item.NmCliente;
                topClientes.QtdConsultas = consultas.Count;
                topClientes.Telefone = item.DsTelefone;
                topClientes.TotalGastos = consultas.Sum(x => x.VlTotal);

                relatorioTopClientes.Add(topClientes);
            }

            relatorioTopClientes = relatorioTopClientes.OrderByDescending(x => x.TotalGastos).ToList();
            return relatorioTopClientes.Take(10).ToList();
        }

        public List<Models.Response.RelatorioTopServicos> ParaTopServicosResponse (List<Models.TbServico> servicos)
        {
            List<Models.Response.RelatorioTopServicos> relatorioTopServicos = new List<Models.Response.RelatorioTopServicos>();

            foreach(Models.TbServico item in servicos)
            {
                Models.Response.RelatorioTopServicos topServicos = new Models.Response.RelatorioTopServicos();

                List<Models.TbConsulta> consultas = ctx.TbConsulta.Where(x => x.IdServico == item.IdServico).ToList();

                topServicos.Nome = item.NmServico;
                topServicos.QtdConsultas = consultas.Count;
                topServicos.TotalGasto = consultas.Sum(x => x.VlTotal);

                relatorioTopServicos.Add(topServicos);
            }

                relatorioTopServicos = relatorioTopServicos.OrderByDescending(x => x.TotalGasto).ToList();

                return relatorioTopServicos.Take(10).ToList();
        }
        
    }
}
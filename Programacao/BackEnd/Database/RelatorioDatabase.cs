using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Database
{
    public class RelatorioDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();
        public List<Models.TbConsulta> RelatorioPorDia(DateTime dia)
        {

            List<Models.TbConsulta> consultas = ctx.TbConsulta.Include(x => x.IdClienteNavigation)
                                                .Where(x => x.DtConsulta.Date == dia.Date && x.DsSituacao 
                                                != "Cancelado").ToList();

            return consultas;

        }


        public List<Models.TbConsulta> RelatorioVendaPorMes(int mesInicio, int mesFinal)
        {

            List<Models.TbConsulta> consultas = ctx.TbConsulta.Where(x => x.DtConsulta.Month >= mesInicio 
                                                && x.DtConsulta.Month <= mesFinal).ToList();

            return consultas;

        }

        public List<Models.TbCliente> PegarTopCliente()
        {
            List<Models.TbCliente> clientes = ctx.TbCliente.Include(x => x.IdLoginNavigation).ToList();
            return clientes;
        }

        public List<Models.TbServico> PegarTopServicos()
        {
            List<Models.TbServico> servico = ctx.TbServico.ToList();
            return servico;
        }

        public List<Models.TbFuncionario> PegarNotaMedia()
        {
            List<Models.TbFuncionario> funcionarios = ctx.TbFuncionario.Include(x => x.TbPerfilAcesso.Where( x => x.DsCargo == "Dentista")).ToList();
            return funcionarios;
        }
        
    }
}
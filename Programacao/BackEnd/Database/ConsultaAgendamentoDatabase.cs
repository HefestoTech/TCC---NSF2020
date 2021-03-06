using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Database
{
    public class ConsultaAgendamentoDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();
        public List<Models.TbConsulta> PegarTodasAsConsultas()
        {
            List<Models.TbConsulta> listaDeConsultas = ctx.TbConsulta.Include(x => x.IdClienteNavigation)
                                                                     .Include(x => x.IdFuncionarioNavigation)
                                                                     .Include(x => x.IdServicoNavigation)
                                                                     .ToList();
            return listaDeConsultas;                                                        

        }

        public List<Models.TbConsulta> AgendadosDoCLiente(int IdCliente)
        {

            List<Models.TbConsulta> listaDeConsultas = this.PegarTodasAsConsultas();

            listaDeConsultas = listaDeConsultas.Where(x => x.IdCliente == IdCliente).ToList();

            return listaDeConsultas;

        }

        public List<Models.TbConsulta> AgendadosPorFiltro(string nome, string servico, string doutor, DateTime data, string situacao)
        {
            List<Models.TbConsulta> listaDeConsultas = this.PegarTodasAsConsultas();
           
            listaDeConsultas = listaDeConsultas.Where(x => x.DsSituacao.ToLower().Contains(situacao) 
                               && x.IdClienteNavigation.NmCliente.ToLower().Contains(nome) 
                               && x.IdServicoNavigation.NmServico.ToLower().Contains(servico)
                               && x.IdFuncionarioNavigation.NmFuncionario.ToLower().Contains(doutor)).ToList();
           
            //Pega pelo horário + data
            if(data.Hour != 0 && data.Year != 0001)
               listaDeConsultas = listaDeConsultas.Where(x => x.DtConsulta == data).ToList();
            
            //Pega somente pelo horário (porque o usuario pode passar só o horário, sem uma data)
            else if(data.Hour != 0)
                listaDeConsultas = listaDeConsultas.Where(x => x.DtConsulta.Hour == data.Hour && x.DtConsulta.Minute == data.Minute).ToList();
            
            //Pega somente pela data(porque o usuario pode passar só a data, sem horário)
            else if(data.Year != 0001)
               listaDeConsultas = listaDeConsultas.Where( x => x.DtConsulta.Date == data.Date).ToList();           
           
            return listaDeConsultas;                   
                               
        }

       
    }
}
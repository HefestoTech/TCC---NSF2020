using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Business
{
    public class RelatorioBusiness
    {
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();
        Database.RelatorioDatabase dbRelatorio = new Database.RelatorioDatabase();
       
        public List<Models.TbConsulta> RelatorioPorDia(DateTime dia)
        {
            List<Models.TbConsulta> consultas = dbRelatorio.RelatorioPorDia(dia);

            if(dia == null)
                throw new ArgumentException("A data é obrigatória");
            
            if(consultas.Count == 0)
                throw new ArgumentException("Nenhuma consulta realizada nesse dia");
            
            return consultas;

        }

        public List<Models.TbConsulta> RelatorioVendaPorMes(int mesInicio, int mesFinal)
        {
            if(mesInicio == 0)
                throw new ArgumentException("O mês inicial é obrigatório");

            if(mesFinal == 0)
                throw new ArgumentException("O mês final é obrigatório");    
         
            List<Models.TbConsulta> consultas = dbRelatorio.RelatorioVendaPorMes(mesInicio, mesFinal);
            return consultas;

        }

        public List<Models.TbCliente> PegarTopCliente()
        {

            List<Models.TbCliente> clientes = dbRelatorio.PegarTopCliente();
            return clientes;

        }

        public List<Models.TbServico> PegarTopServicos()
        {
            List<Models.TbServico> servicos = dbRelatorio.PegarTopServicos();
            return servicos;
        }
        
    }

}
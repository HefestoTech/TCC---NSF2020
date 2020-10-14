using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace BackEnd.Database
{
    public class AgendamentoDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();

        public Models.TbServico PegarInformacoesServico(int IdServico)
        {
           Models.TbServico servico = ctx.TbServico.FirstOrDefault( x => x.IdServico == IdServico);
           return servico;
        }
        
        public Models.TbConsulta AgendarNovaConsultaCliente(Models.TbConsulta request)
        {
           ctx.TbConsulta.Add(request);
           ctx.SaveChanges();
           return request;
        }

        public void RemarcarConsulta(Models.Request.RemarcacaoRequest request)
        {
            Models.TbConsulta consulta = ctx.TbConsulta.FirstOrDefault( x => x.IdConsulta == request.IdAgendamento);
            consulta.DtConsulta = request.NovoHorario;
            ctx.SaveChanges();
        }
    }
}
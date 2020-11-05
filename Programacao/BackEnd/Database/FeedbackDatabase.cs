using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Database
{
    public class FeedbackDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();

        Database.AgendamentoDatabase dbAgendamento = new AgendamentoDatabase();
      
        public Models.TbConsulta PegarConsulta (int id) 
        {
            Models.TbConsulta consulta = ctx.TbConsulta.FirstOrDefault(x => x.IdConsulta == id);
            return consulta;
        }
        
        public Models.TbConsulta AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            Models.TbConsulta consultaComNovoFeedback = this.PegarConsulta(feedback.IdConsulta);
          
            consultaComNovoFeedback.NrNota = feedback.Nota;
            ctx.SaveChanges();
            
            consultaComNovoFeedback.DsComentarioFeedback = feedback.Comentario;
            ctx.SaveChanges();
          
            return consultaComNovoFeedback;
        }
    }
}
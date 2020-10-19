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
        public Models.TbConsulta AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            Models.TbConsulta consulta = ctx.TbConsulta.FirstOrDefault(x => x.IdConsulta == feedback.IdConsulta);
            consulta.NrNota = feedback.Nota;
            consulta.DsComentarioFeedback = feedback.Comentario;
            ctx.SaveChanges();
            return consulta;
        }
    }
}
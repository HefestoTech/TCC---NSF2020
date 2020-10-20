using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Business
{
    public class FeedbackBusiness
    {
        Database.FeedbackDatabase dbFeedback = new Database.FeedbackDatabase();
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();
        public Models.TbConsulta AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            validador.ValidarId(feedback.IdConsulta);
            
            validador.ValidarNota(feedback.Nota);
            
            return dbFeedback.AvaliarConsulta(feedback);
        }
    }
}
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
        public Models.TbConsulta AvaliarConsulta (Models.Request.AvaliarRequest feedback)
        {
            return dbFeedback.AvaliarConsulta(feedback);
        }
    }
}
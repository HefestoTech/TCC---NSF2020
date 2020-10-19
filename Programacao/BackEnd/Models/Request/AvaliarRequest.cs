using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace BackEnd.Models.Request
{
    public class AvaliarRequest
    {
        public int IdConsulta {get; set;}
        public int Nota {get; set;}
        public string Comentario {get;set;}
    }
}
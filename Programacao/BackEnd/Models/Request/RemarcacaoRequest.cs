using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class RemarcacaoRequest
    {
        public int IdAgendamento {get; set;}

        public DateTime NovoHorario {get; set;}
    }
}
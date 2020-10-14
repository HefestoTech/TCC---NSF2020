using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class ValoresDaConsultaRequest
    {
        public int IdServico {get; set;}
        public string FormaDePagamento {get; set;}
        public int QuantidadeParcelas {get; set;}
    }
}
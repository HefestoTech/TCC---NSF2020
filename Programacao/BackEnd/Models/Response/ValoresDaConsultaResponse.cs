using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Response
{
    public class ValoresDaConsulta
    {
        public decimal Subtotal {get; set;}
        public decimal Desconto {get; set;}
        public decimal Total {get; set;}
        public decimal ValorParcelado {get; set;}
    }
}
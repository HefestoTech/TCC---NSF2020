using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Models.Response
{
    public class RelatorioVendaPorDiaResponse
    {
        public int Dia {get; set;}
        public string Cliente {get; set;}
        public decimal? TotalVenda {get; set;}
        public DateTime Hora {get; set;}
        
    }
}
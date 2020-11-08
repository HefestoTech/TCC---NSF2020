using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Models.Response
{
    public class RelatorioVendaPorMesResponse
    {
        public int Mes {get; set;}
        public int QtdVendas {get; set;}
        public decimal TotalVenda {get; set;}
        
    }
}
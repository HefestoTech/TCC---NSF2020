using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Models.Response
{
    public class RelatorioTopClientes
    {
        public string Nome {get; set;}
        public string Email {get; set;}
        public string Telefone {get; set;}
        public int QtdConsultas {get; set;}
        public decimal? TotalGastos {get; set;}
        
    }
}
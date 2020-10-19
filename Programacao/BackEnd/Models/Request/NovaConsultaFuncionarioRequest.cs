using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class NovaConsultaFuncionarioRequest
    {
       public int IdCliente {get; set;}
       public int IdFuncionario {get; set;}
       public int IdServico {get; set;}
       public string EmailCliente { get; set; }
       public DateTime Data {get; set;}
       public string FormaDePagamento {get; set;}
       public int QtdParcelas {get; set;}
       public decimal? SubTotal {get; set;}
       public decimal? Desconto {get; set;}
       public decimal ValorTotal {get; set;}    
    }
}
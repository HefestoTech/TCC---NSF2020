using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Response
{
    public class AgendadosResponse
    {
        public int IdConsulta {get; set;}
        public string NomeCliente {get; set;}
        public string Servico {get; set;}
        public DateTime Data {get; set;}
        public string Doutor {get; set;}
        public string Situacao {get; set;}
        public string FormaPagamento { get; set; }
        public decimal? Subtotal { get; set; }
        public decimal? Desconto { get; set; }
        public decimal? ValorTotal {get; set;}
        public int? Parcelas {get; set;}
        public decimal? TotalPorMes {get; set;}
        public int? Nota {get; set;}
        public string Comentario {get; set;}
    }

    public class AgendadosSeparadosPorSituacao
    {
        public List<AgendadosResponse> Concluidos {get; set;}
        public List<AgendadosResponse> Agendados {get; set;}
        public List<AgendadosResponse> Cancelados {get; set;}
        public List<AgendadosResponse> NaoCompareceu {get; set;}
    }
}
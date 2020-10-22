using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Response
{
    public class ConsultaResponse
    {
        public string NomeCliente {get; set;}
        public string NomeFuncionario {get; set;}
        public string Servico {get; set;}
        public string Email {get; set;}
        public DateTime? HorarioConsulta {get; set;}
        public DateTime? HorarioInclusao {get; set;}
    }
}
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Request
{
    public class CadastrarClienteRequest
    {
 
        public string Email {get; set;} 
        public string Senha {get; set;}
        public string Nome {get; set;}
        public string Sexo {get; set;}
        public DateTime Nascimento {get; set;}
        public string CPF { get; set; }
        public string CEP {get; set;}
        public string Logradouro {get; set;}
        public int NumeroResidencial {get; set;}
        public string Complemento {get; set;}
        public string Cidade {get; set;}
        public string Estado {get; set;}
        public string Telefone {get; set;}
      
    }
}
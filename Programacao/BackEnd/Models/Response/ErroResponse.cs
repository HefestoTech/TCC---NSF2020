using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Models.Response
{
    public class ErroResponse
    {
        public string Erro {get; set;}
        public int Codigo { get; set;}

        public ErroResponse (string erro, int cdg)
        {
            this.Codigo = cdg;
            this.Erro = erro;
        }
    }
}
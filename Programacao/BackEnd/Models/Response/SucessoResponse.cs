using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace BackEnd.Models.Response
{
    public class SucessoResponse
    {
        public string Mensagem {get; set;}

        public SucessoResponse (string msg)
        {
            this.Mensagem = msg;
        }
    }
}
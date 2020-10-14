using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Business.Validador
{
    public class ValidadorBusiness
    {
        public void ValidarEmail (string email)
        {
           if(!email.Contains("@gmail.com") && !email.Contains("@outlook.com") && 
              !email.Contains("@bol.com"))
            throw new ArgumentException("O E-mail esta incorreto");
        }

        public void ValidarSenha (string senha)
        {
            if(string.IsNullOrEmpty(senha))
               throw new ArgumentException($"A Senha não pode ser nula");
        }
    }
}
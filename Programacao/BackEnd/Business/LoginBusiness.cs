using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Business
{
    public class LoginBusiness
    {
        Database.LoginDatabase dbLogin = new Database.LoginDatabase();
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();
        public Models.TbLogin Logar(Models.Request.LoginRequest loginRequest)
        {
            validador.ValidarEmail(loginRequest.Email);

            validador.ValidarStrings(loginRequest.Senha, "senha");

            Models.TbLogin login = dbLogin.PegarLoginUsuario(loginRequest.Email, loginRequest.Senha);

            if (login == null)
                throw new ArgumentException("Nenhum Registo Encontrado!!!");

            return login;    
        }   
    }
}
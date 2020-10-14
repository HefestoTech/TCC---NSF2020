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

            validador.ValidarSenha(loginRequest.Senha);

            return dbLogin.PegarLoginUsuario(loginRequest);
        }   
    }
}
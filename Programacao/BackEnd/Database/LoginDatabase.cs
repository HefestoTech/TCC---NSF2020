using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
namespace BackEnd.Database
{
    public class LoginDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();
        public Models.TbLogin PegarLoginUsuario (Models.Request.LoginRequest loginRequest)
        {
           Models.TbLogin login = ctx.TbLogin.FirstOrDefault(x => x.DsEmail == loginRequest.Email && 
                                                             x.DsSenha == loginRequest.Senha);

           return login;                                                   
        }

        public Models.TbFuncionario PegarInformacoesFuncionario (int idLogin)
        {
            return ctx.TbFuncionario.FirstOrDefault( x => x.IdLogin == idLogin);
        }

        public Models.TbCliente PegarInformacoesCliente(int idLogin)
        {
            return ctx.TbCliente.FirstOrDefault(x => x.IdLogin == idLogin);
        }
    }
}
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
            Models.TbLogin login = ctx.TbLogin.FirstOrDefault(x => x.IdLogin == idLogin);
            int numeroIdLogin = login.IdLogin;
            Models.TbFuncionario funcionario = ctx.TbFuncionario.FirstOrDefault(x => x.IdLogin == numeroIdLogin);
            return funcionario;
        }

        public Models.TbCliente PegarInformacoesCliente(int idLogin)
        {
            Models.TbCliente cliente = ctx.TbCliente.FirstOrDefault(x => x.IdLogin == idLogin);
            return cliente;
        }
    }
}
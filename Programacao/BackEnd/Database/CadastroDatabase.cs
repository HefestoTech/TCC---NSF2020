using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Database
{
    public class CadastroDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();
        Database.LoginDatabase dbLogin = new LoginDatabase();

        public bool ConfirmarSeJaTemOMesmoEmailCadastrado (string email) 
        {
            List<Models.TbLogin> logins = ctx.TbLogin.Where(x => x.DsEmail == email).ToList();
            return logins.Count != 0;

        }
        public Models.TbLogin ReceberModelos(Models.TbLogin login, Models.TbCliente cliente)
        {
            Models.TbLogin loginCadastrado = InserirLogin(login);

            InserirCliente(cliente, loginCadastrado.IdLogin);

            return dbLogin.PegarLoginUsuario(loginCadastrado.DsEmail, loginCadastrado.DsSenha);
        }

        public Models.TbLogin InserirLogin (Models.TbLogin login)
        {
            ctx.TbLogin.Add(login);
            ctx.SaveChanges();
            return login;
        }

        public Models.TbCliente InserirCliente (Models.TbCliente cliente, int idLogin)
        {
            cliente.IdLogin = idLogin;
            ctx.TbCliente.Add(cliente);
            ctx.SaveChanges();
            return cliente;
        }
    }
}
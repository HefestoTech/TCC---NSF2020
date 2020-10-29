using System;
using System.Collections;
using System.Linq;

namespace BackEnd.Business
{
    public class CadastroBusiness
    {
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();
        Database.CadastroDatabase dbCadastro = new Database.CadastroDatabase();
        public Models.TbLogin CadastrarCliente(Models.TbLogin tbLogin, Models.TbCliente tbCliente)
        {
            //Validações do Login
            validador.ValidarEmail(tbLogin.DsEmail);
            if(dbCadastro.ConfirmarSeJaTemOMesmoEmailCadastrado(tbLogin.DsEmail))
               throw new ArgumentException("Esse e-mail já está cadastrado em nosso sistema.");
            validador.ValidarForcaDaSenha(tbLogin.DsSenha);

            //Validações do Cliente
            validador.ValidarCpf(tbCliente.DsCpf);
            validador.ValidarNome(tbCliente.NmCliente);
            validador.ValidarStrings(tbCliente.DsSexo, "sexo");
            validador.ValidarCep(tbCliente.DsCep);
            if(string.IsNullOrEmpty(tbCliente.DsLougradouro))
                throw new ArgumentException("O CEP está incorreto.");

            if(tbCliente.NrResidenical < 0 )
                throw new ArgumentException("O número residêncial não pode ser negativo.");

            if (tbCliente.NrResidenical == 0)
                throw new ArgumentException("O número residêncial é obrigatório.");


            if(tbCliente.DsTelefone.Length > 15 || tbCliente.DsTelefone.Length < 11)
                throw new ArgumentException("O número telefônico está incorreto.");         
           
            return dbCadastro.ReceberModelos(tbLogin, tbCliente);

        } 
    }
}
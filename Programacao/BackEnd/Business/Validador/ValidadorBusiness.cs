using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Business.Validador
{
    public class ValidadorBusiness
    {

        Database.AgendamentoDatabase dbAgendamento = new Database.AgendamentoDatabase();
        public void ValidarEmail (string email)
        {
           if(!email.Contains("@gmail.com") && !email.Contains("@hotmail.com") && 
              !email.Contains("@bol.com"))
            throw new ArgumentException("O E-mail esta incorreto.");
        }


        public void ValidarForcaDaSenha (string senha)
        {
            this.ValidarStrings(senha, "senha");

            if(senha.Length < 8)
              throw new ArgumentException("A senha deve conter no mínimo 8 caracteres.");

            if(this.QuantidadeDeNumeros(senha))
              throw new ArgumentException("A senha deve conter no mínimo dois números.");

            if(this.CaracteresEspeciais(senha))
              throw new ArgumentException("A senha deve conter no mínimo um caractere especial.");   
  
        }

        public bool QuantidadeDeNumeros (string senha)
        {
            int x = 0;
            for(int i = 0; i < senha.Length; i++ )
            {
                if(senha[i] == '0' ||senha[i] == '1'||senha[i] == '1'||senha[i] == '3' ||senha[i] == '4' 
                 ||senha[i] == '5' ||senha[i] == '6' ||senha[i] == '7' ||senha[i] == '8' || senha[i] == '9' )
                    x++;  
            }

            return x < 2;
        }

        public bool CaracteresEspeciais (string senha)
        {
            int x = 0;
            for (int i = 0; i < senha.Length; i++)
            {
                if (senha[i] == '!' || senha[i] == '@' || senha[i] == '#' || senha[i] == '$' || senha[i] == '%' || senha[i] == 5 ||
                    senha[i] == '&' || senha[i] == '*')
                    x++;

            }

            return x < 1;
        }

        public void ValidarStrings (string dado, string campo)
        {
            if(string.IsNullOrEmpty(dado))
               throw new ArgumentException($"O {campo} é obrigatório.");
        }

        public void ValidarId (int? id)
        {
            if(id == null || id == 0)
              throw new ArgumentException("Ocorreu um erro, tente novamente.");
               
        }

        public void ValidarPagamento (string FormaDePagamento, int? QuantidadeParcelas)
        {
            if (string.IsNullOrEmpty(FormaDePagamento))
                throw new ArgumentException("A forma de pagamento é obrigatória.");

            if (FormaDePagamento == "Dinheiro" && QuantidadeParcelas > 1)
                throw new ArgumentException("Se a forma de pagamento for em dinheiro é obigatório o pagamento a vista.");

            if (QuantidadeParcelas > 8)
                throw new ArgumentException("A quantidade de parcelas é de no maximo 8.");

            if (QuantidadeParcelas < 1)
                throw new ArgumentException("A quantidade de parcelas deve ser no minímo 1.");    
        }

        public void ValidarHorarios (DateTime horario)
        {
            if(horario < DateTime.Now)
               throw new ArgumentException("O data da consulta não pode ser menor que a data atual.");

            if(horario.Hour < 8)
               throw new ArgumentException("Estamos fechados nesse horário.");

            if(horario.Hour > 18)
               throw new ArgumentException("Estamos fechados nesse horário.");

            if(horario.Hour == 12)
               throw new ArgumentException("Esse é o horário de almoço.");

            if(horario.DayOfWeek == DayOfWeek.Sunday)
               throw new ArgumentException("Não abrimos aos domingos."); 

            if(horario > DateTime.Now.AddMonths(1))
                throw new ArgumentException("A data da consulta não pode ser maior do que um mês.");    
        }

        public void ValidarData (DateTime data)
        {
            if (data > DateTime.Now)
                throw new ArgumentException("A data de nascimento não pode ser maior que a data atual.");
        }

        public void ValidarSeOFuncionarioEstaDisponivel (DateTime DtConsulta, int IdFuncionario)
        {
            if(dbAgendamento.ValidarSeOFuncionarioEstaDisponivel(DtConsulta, IdFuncionario))
               throw new ArgumentException("O Dentista ja tem uma consulta nesse mesmo horário.");
        }

        public void ValidarSeOClienteEstaDisponivel(DateTime DtConsulta, int IdCliente)
        {
            if(dbAgendamento.ValidarSeOClienteEstaDisponivel(DtConsulta, IdCliente))
                throw new ArgumentException("Você já tem uma consulta nesse horário.");
        }

        public void ValidarNota (int? nota)
        {
            if(nota == null)
               throw new ArgumentException("A nota é obrigatória.");

            if(nota < 1)
               throw new ArgumentException("A nota não pode ser menor do que 1.");

            if(nota > 5)
               throw new ArgumentException("A nota não pode ser maior do que 5.");   
        }

        public void ValidarCpf (string cpf)
        {
            if(cpf.Length < 11)
               throw new ArgumentException("O CPF deve conter 11 digitos.");
            
            if(cpf.Length > 14)
                throw new ArgumentException("O CPF deve conter no máximo 14 digitos.");   
        }

        public void ValidarNome (string nome)
        {
            this.ValidarStrings(nome, "nome");

            if(!nome.Contains(" "))
               throw new ArgumentException("O sobrenome é obrigatório.");
        }

        public void ValidarCep (string cep)
        {
            if(cep.Length < 8 || cep.Length > 9)
               throw new ArgumentException("O CEP está incorreto");
   
        }

    }
}
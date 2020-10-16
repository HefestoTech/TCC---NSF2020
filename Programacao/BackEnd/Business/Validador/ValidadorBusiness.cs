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
           if(!email.Contains("@gmail.com") && !email.Contains("@outlook.com") && 
              !email.Contains("@bol.com"))
            throw new ArgumentException("O E-mail esta incorreto");
        }

        public void ValidarSenha (string senha)
        {
            if(string.IsNullOrEmpty(senha))
               throw new ArgumentException($"A Senha não pode ser nula");
        }

        public void ValidarStrings (string campo)
        {
            if(string.IsNullOrEmpty(campo))
               throw new ArgumentException($"O {campo} não pode ser nulo");
        }

        public void ValidarId (int? id)
        {
            if(id == null)
              throw new ArgumentException("Ocorreu um erro, tente novamente");
               
        }

        public void ValidarPagamento (string FormaDePagamento, int? QuantidadeParcelas)
        {
            if (string.IsNullOrEmpty(FormaDePagamento))
                throw new ArgumentException("A forma de pagamento é obrigatória");

            if (FormaDePagamento == "Dinheiro" && QuantidadeParcelas > 1)
                throw new ArgumentException("Se a forma de pagamento for em dinheiro é obigatório o pagamento a vista");

            if (QuantidadeParcelas > 8)
                throw new ArgumentException("A quantidade de parcelas é de no maximo 8");
        }

        public void ValidarHorarios (DateTime horario)
        {
            if(horario < DateTime.Now)
               throw new ArgumentException("O data da consulta não pode ser menor que a data atua!!!");

            if(horario.Hour < 8)
               throw new ArgumentException("Estamos fechados nesse horário");

            if(horario.Hour > 18)
               throw new ArgumentException("Estamos fechados nesse horário");

            if(horario.Hour == 12)
               throw new ArgumentException("Esse é o horário de almoço");

            if(horario.DayOfWeek == DayOfWeek.Sunday)
               throw new ArgumentException("Não abrimos aos domingos"); 

            if(horario > DateTime.Now.AddMonths(1))
                throw new ArgumentException("A data da consulta não pode ser maior do que um mês.");    
        }

        public void ValidarSeOFuncionarioEstaDisponivel (DateTime DtConsulta, int IdFuncionario)
        {
            if(dbAgendamento.ValidarSeOFuncionarioEstaDisponivel(DtConsulta, IdFuncionario))
               throw new ArgumentException("O Dentista ja tem uma consulta nesse mesmo horário.");
        }

        public void ValidarSeOClienteEstaDisponivel(DateTime DtConsulta, int IdCliente)
        {
            if(dbAgendamento.ValidarSeOClienteEstaDisponivel(DtConsulta, IdCliente))
                throw new ArgumentException("Você ja tem uma consulta nesse horário");
        }


    }
}
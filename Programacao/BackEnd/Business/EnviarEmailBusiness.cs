using System;
using System.Collections;
using System.Net.Mail;
using System.Net.Mime;
using System.Net;
using System.Text.RegularExpressions;



namespace BackEnd.Business
{
    public class EnviarEmailBusiness
    {
        public void EnviarEmail(string destinatario, string titulo, string corpo)
        {

            MailMessage mensagem = new MailMessage("teste0123401234@gmail.com", destinatario, titulo, corpo);

            using (var smtpClient = new SmtpClient())
            {
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new System.Net.NetworkCredential("teste0123401234@gmail.com", "T!este123");
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.Port = 587;
                smtpClient.EnableSsl = true;
                smtpClient.Timeout = 20_000;
                smtpClient.Send(mensagem);
            }
        }

        public void EnviarEmailDeAgendamentoDaConsulta (Models.Response.ConsultaResponse consultaResponse)
        {
            string titulo = "Confirmação de Consulta";
            string corpo = $"Olá {consultaResponse.NomeCliente}. Você agendou uma consulta para {consultaResponse.HorarioConsulta}.";
            this.EnviarEmail(consultaResponse.Email, titulo, corpo);
        }

        public void EnviarEmailDeRemarcacaoDaConsulta(Models.Response.ConsultaResponse consultaResponse)
        {
            string titulo = "Remarcação de Consulta";
            string corpo = $"Olá {consultaResponse.NomeCliente}. Você remarcou uma consulta para {consultaResponse.HorarioConsulta}.";
            this.EnviarEmail(consultaResponse.Email, titulo, corpo);
        }

        public void EnviarEmailDeCancelamentoDaConsulta(Models.Response.ConsultaResponse consultaResponse)
        {
            string titulo = "Cancelamento da Consulta";
            string corpo = $"Olá {consultaResponse.NomeCliente}, você cancelou uma consulta que estava marcada para {consultaResponse.HorarioConsulta}.";
            this.EnviarEmail(consultaResponse.Email, titulo, corpo);
        }

        public void EnviarEmailDeAvaliacaoDaConsulta(Models.Response.ConsultaResponse consultaResponse)
        {
            string titulo = "Avaliar Consulta";
            string corpo = $"Olá {consultaResponse.NomeCliente}, a sua consulta foi realizada. Você pode ir em nosso site e avaliar a consulta.";
            this.EnviarEmail(consultaResponse.Email, titulo, corpo);
        }

    }
}
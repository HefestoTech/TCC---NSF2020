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
        public string EnviarEmail(string destinatario)
        {

            MailMessage mensagem = new MailMessage("teste0123401234@gmail.com", "felipecsilva207@gmail.com", "testee", "só testandooo");

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

            return "Enviamos um email para sua conta com as informações da consulta!";
        }

    }
}
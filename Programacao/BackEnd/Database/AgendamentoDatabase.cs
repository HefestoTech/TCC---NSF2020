using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace BackEnd.Database
{
    public class AgendamentoDatabase
    {
        Models.db_odontoContext ctx = new Models.db_odontoContext();


        public List<Models.TbFuncionario> ListarDentistasDisponiveis(DateTime data)
        {
             
            List<Models.TbFuncionario> funcionarios = ctx.TbFuncionario.ToList();

            List<Models.TbFuncionario> disponiveis = new List<Models.TbFuncionario>();

            foreach(Models.TbFuncionario item in funcionarios)
            {
                if(this.ValidarSeOFuncionarioEstaDisponivel(data, item.IdFuncionario) == false)
                   disponiveis.Add(item);
                else
                   continue;  
            }

            List<Models.TbFuncionario> somenteDentistas = new List<Models.TbFuncionario>();
            foreach(Models.TbFuncionario item in disponiveis)
            {
                if(this.SomenteDentista(item))
                  somenteDentistas.Add(item);
            }
            
            return somenteDentistas;

        }

        public bool SomenteDentista(Models.TbFuncionario funcionario)
        {
            List<Models.TbPerfilAcesso> perfilAcesso = ctx.TbPerfilAcesso.ToList();
            foreach (Models.TbPerfilAcesso item in perfilAcesso)
            {
                if (item.DsCargo == "Dentista" && item.IdFuncionario == funcionario.IdFuncionario)
                    return true;
            }

            return false;

        }
        
        public bool ValidarSeOFuncionarioEstaDisponivel (DateTime data, int id)
        {
            List<Models.TbConsulta> consultas = ctx.TbConsulta.Where( x => x.DtConsulta.Date == data.Date).ToList();

            foreach(Models.TbConsulta item in consultas)
            {
                if(item.IdFuncionario == id && item.DtConsulta.Hour == data.Hour)
                   return true;
            }

            return false;
        }

        public bool ValidarSeOClienteEstaDisponivel(DateTime data, int id)
        {
            List<Models.TbConsulta> consultas = ctx.TbConsulta.Where(x => x.DtConsulta.Date == data.Date).ToList();

            foreach (Models.TbConsulta item in consultas)
            {
                if (item.IdCliente == id && item.DtConsulta.Hour == data.Hour)
                    return true;
            }

            return false;
        }

    
        public Models.TbServico PegarInformacoesServico(Models.Request.ValoresDaConsultaRequest request)
        {
           Models.TbServico servico = ctx.TbServico.FirstOrDefault( x => x.IdServico == request.IdServico);
           return servico;
        }
        
        public Models.TbConsulta AgendarNovaConsultaCliente(Models.TbConsulta request)
        {
           ctx.TbConsulta.Add(request);
           ctx.SaveChanges();
           return request;
        }

        public Models.TbConsulta PegarConsulta(int id)
        {
            return ctx.TbConsulta.FirstOrDefault(x => x.IdConsulta == id);
        }

        public void RemarcarConsulta(Models.Request.RemarcacaoRequest request)
        {
            Models.TbConsulta consultaNova = this.PegarConsulta(request.IdAgendamento);
            consultaNova.DtConsulta = request.NovoHorario;
            ctx.SaveChanges();
        }
    }
}
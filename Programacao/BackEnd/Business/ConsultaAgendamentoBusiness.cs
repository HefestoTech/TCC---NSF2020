using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace BackEnd.Business
{
    public class ConsultaAgendamentoBusiness
    {
        Database.ConsultaAgendamentoDatabase dbConsulta = new Database.ConsultaAgendamentoDatabase();
        public List<Models.TbConsulta> AgendadosDoCLiente(int IdCliente)
        {
            
            List<Models.TbConsulta> consultas = dbConsulta.AgendadosDoCLiente(IdCliente);

            if(consultas.Count == 0)
               throw new ArgumentException("Você não tem consultas.");

            return consultas;

        }

        public List<Models.TbConsulta> AgendadosPorFiltro(string nome, string servico, string doutor, DateTime data, string situacao)
        {
            if(nome == null)
                nome = "";

            if(servico == null)
                servico = "";

            if(doutor == null)
                doutor = "";

            if(situacao == null)
                situacao = "";

            List<Models.TbConsulta> consultas = dbConsulta.AgendadosPorFiltro(nome, servico, doutor, data, situacao);

            if(consultas.Count == 0)
                throw new ArgumentException("Nenhuma consulta encontrada a partir dos filtros passados.");

            return consultas;    
        }
    }
}
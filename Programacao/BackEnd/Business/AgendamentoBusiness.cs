using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace BackEnd.Business
{

    public class AgendamentoBusiness
    {
        Database.AgendamentoDatabase dbAgendamento = new Database.AgendamentoDatabase();

        public Models.TbServico PegarValorDaConsulta(int IdServico)
        {
            return dbAgendamento.PegarInformacoesServico(IdServico);
        }
        
        public Models.TbConsulta AgendarNovaConsultaCliente(Models.TbConsulta request)
        {
            return dbAgendamento.AgendarNovaConsultaCliente(request); 
        }

        public void RemarcarConsulta(Models.Request.RemarcacaoRequest request)
        {
            dbAgendamento.RemarcarConsulta(request);
        }
    }
}
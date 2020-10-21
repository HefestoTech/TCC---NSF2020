using System;
using System.Collections;
using System.Collections.Generic;

namespace BackEnd.Business
{

    public class AgendamentoBusiness
    {
        Database.AgendamentoDatabase dbAgendamento = new Database.AgendamentoDatabase();
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();
        
        public List<Models.TbFuncionario> ListarDentistasDisponiveis(DateTime data)
        {
            List<Models.TbFuncionario> funcionarios = dbAgendamento.ListarDentistasDisponiveis(data);
            
            if(funcionarios.Count == 0 || funcionarios == null)
               throw new ArgumentException("Não ha dentistas disponiveis nesse horário.");
                
                return funcionarios;
        }
        
        public Models.TbServico PegarValorDaConsulta(Models.Request.ValoresDaConsultaRequest request)
        {   
            validador.ValidarId(request.IdServico);

            validador.ValidarPagamento(request.FormaDePagamento, request.QuantidadeParcelas);
            
            return dbAgendamento.PegarInformacoesServico(request);
        }
        
        public Models.TbConsulta AgendarNovaConsulta(Models.TbConsulta request, string email)
        {
            if(request.IdServico.ToString() == null)
               throw new ArgumentException("Obrigatório a escolha de um serviço");

            if(request.IdFuncionario.ToString() == null)
                throw new ArgumentException("Obrigatório a escolha de um profissional");   

            validador.ValidarSeOFuncionarioEstaDisponivel(request.DtConsulta, request.IdFuncionario);
            
            validador.ValidarSeOClienteEstaDisponivel(request.DtConsulta, request.IdCliente);
           
            validador.ValidarId(request.IdCliente);

            validador.ValidarHorarios(request.DtConsulta);

            validador.ValidarPagamento(request.TpFormaPagamento, request.NrParcelas);

            if(email == null)
                return dbAgendamento.AgendarNovaConsulta(request); 
            else
            {
                validador.ValidarEmail(email);
                int IdCliente = dbAgendamento.DescobrirClientePeloEmail(email);
                
                request.IdCliente = IdCliente;
                return dbAgendamento.AgendarNovaConsulta(request);
            }      
        }

        public Models.TbConsulta RemarcarConsulta(Models.Request.RemarcacaoRequest request)
        {
            validador.ValidarHorarios(request.NovoHorario);

            Models.TbConsulta consulta = dbAgendamento.PegarConsulta(request.IdAgendamento);

            validador.ValidarSeOFuncionarioEstaDisponivel( request.NovoHorario ,consulta.IdFuncionario);
            
            validador.ValidarSeOClienteEstaDisponivel(request.NovoHorario, consulta.IdCliente);
            
            return dbAgendamento.RemarcarConsulta(request);
        }

        public Models.TbConsulta CancelarConsulta(int id)
        {
           validador.ValidarId(id);

           return dbAgendamento.CancelarConsulta(id);
        }

        public Models.TbConsulta AlterarSituação(int idConsulta, string novaSituacao)
        {
           validador.ValidarId(idConsulta);

           return dbAgendamento.AlterarSituação(idConsulta, novaSituacao);
        }

    }
}
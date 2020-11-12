using System;
using System.Collections;
using System.Collections.Generic;

namespace BackEnd.Business
{

    public class AgendamentoBusiness
    {
        Database.AgendamentoDatabase dbAgendamento = new Database.AgendamentoDatabase();
        Validador.ValidadorBusiness validador = new Validador.ValidadorBusiness();

        public List<Models.TbServico> ListarTodosOsServicos()
        {   
            List<Models.TbServico> servicos = dbAgendamento.ListarTodosOsServicos();

            if(servicos.Count == 0)
               throw new ArgumentException("Houve um erro ao pegar os serviços disponíveis");

            return servicos;   
        }
        
        public List<Models.TbFuncionario> ListarDentistasDisponiveis(DateTime data)
        {
         
            List<Models.TbFuncionario> funcionarios = dbAgendamento.ListarDentistasDisponiveis(data);
            
            if(funcionarios.Count == 0 || funcionarios == null)
               throw new ArgumentException("Não ha dentistas disponiveis nesse horário.");
                
                return funcionarios;
        }

        
        public Models.TbServico PegarValorDaConsulta(int idServico, string formaDePagamento, int quantidadeParcelas)
        {   
            if(idServico == 0)
               throw new ArgumentException("Escolha um serviço para calcularmos o total.");

            validador.ValidarPagamento(formaDePagamento, quantidadeParcelas);
            
            return dbAgendamento.PegarInformacoesServico(idServico, formaDePagamento, quantidadeParcelas);
        }

        public Models.Response.ValoresDaConsulta TransformarParaValoresDaConsulta(Models.TbServico servico, string formaDePagamento, int quantidadeParcelas)
        {
            Models.Response.ValoresDaConsulta valores = new Models.Response.ValoresDaConsulta();

            valores.Subtotal = servico.VlPrecoServico;

            if (formaDePagamento == "Dinheiro")
            {
                valores.Desconto = 10 * servico.VlPrecoServico / 100;
                valores.ValorParcelado = 0;
                valores.Total = servico.VlPrecoServico - valores.Desconto;
            }
            else
            {
                valores.Desconto = 0;
                valores.Total = servico.VlPrecoServico - valores.Desconto;
                valores.ValorParcelado = valores.Total / quantidadeParcelas;
            }

            return valores;
        }
        
        public Models.TbConsulta AgendarNovaConsulta(Models.TbConsulta request, string email)
        {
            if(request.IdServico == 0)
               throw new ArgumentException("Obrigatório a escolha de um serviço");

            if(request.IdFuncionario == 0)
                throw new ArgumentException("Obrigatório a escolha de um profissional");   

            validador.ValidarSeOFuncionarioEstaDisponivel(request.DtConsulta, request.IdFuncionario);
            
            validador.ValidarSeOClienteEstaDisponivel(request.DtConsulta, request.IdCliente);

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
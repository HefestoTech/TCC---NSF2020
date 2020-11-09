import axios from 'axios';

const api = axios.create({
  baseURL: "http://52.20.185.38:5000",
});

export default class OdontoApi {

    Cadastrar = async (modeloCadastro)  => {
        const resp = await api.post("/cadastro", modeloCadastro);
        return resp.data;
    }


    Logar = async (modeloLogin)  => {
       const resp = await api.post("/login", modeloLogin);
       return resp.data;
    }

    //Agendar novo - ambos
    SomenteDentistasDisponiveis = async (horarioRequest) => {
        console.log(horarioRequest);
        const resp = await api.get("/agendamento/dentista/disponivel", horarioRequest)
        return resp.data;
    }

    PegarValorDaConsulta = async (dadosPagamento) => {
        const resp = await api.get("/agendamento/valordaconsulta", dadosPagamento);
        return resp.data;
    }

    //Agendar novo - cliente
    AgendarConsultaPorCliente = async (dadosDaConsulta) => {
        const resp = await api.post("/agendamento/cadastrar/cliente", dadosDaConsulta);
        return resp.data;
    }

    //Agendar novo - funcionário
    AgendarConsultaPorFuncionario = async (dadosDaConsulta) => {
        const resp = await api.post("/agendamento/cadastrar/funcionario", dadosDaConsulta);
        return resp.data;
    }

    PegarServicos = async () => {
        const resp = await api.get("/agendamento/PegarServicos");
        return resp.data;
    }

    PegarConsultasCliente = async (idCliente) => {
        const resp = await api.get("/consultaagendamento/agendados/cliente/" + idCliente);
        return resp.data;
    }
    
    PegarConsultasFuncionario = async (nome, servico, doutor, data, situacao) => {
        const resp = await api.get(`/consultaagendamento/agendados/filtro?nome=${nome}&servico=${servico}&doutor=${doutor}&data=${data}&situacao=${situacao}`);
        return resp.data;
    }

    
    RemarcarConsulta = async (novoHorario) => {
        const resp = await api.put("/agendamento/remarcar", novoHorario);
        return resp.data;
    }

    AvaliarConsulta = async (modeloAvaliacao) => {
        const resp = await api.post('/Feedback', modeloAvaliacao);
        return resp.data;
    }

    CancelarConsulta = async (idConsulta) => {
        const resp = await api.put(`/agendamento/cancelar/${idConsulta}`);
        return resp.data;
    }

    AlterarSituacao = async (idConsulta, novaSituacao) => {
        const resp = await api.put(`/agendamento/alterar/situacao/${idConsulta}?novaSituacao=${novaSituacao}`);
        return resp.data;
    }

    //Relatórios

    PegarPorDia = async (data) => {
        const resp = await api.get(`/Relatorio/pegarPorDia?dia=${data}`);
        return resp.data;
    }

    PegarPorMeses = async (mesInicio, mesFinal) => {
        const resp = await api.get(`/Relatorio/pegarPorMes?mesInicio=${mesInicio}&mesFinal=${mesFinal}`)
        return resp.data;
    }

    TopClientes = async () => {
        const resp = await api.get(`/Relatorio/TopClientes`)
        return resp.data;
    }

    TopServicos = async () => {
        const resp = await api.get(`/Relatorio/TopServicos`);
        return resp.data;
    }





}
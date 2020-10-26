import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.20.185.38:5000'
});

export default class OdontoApi {

    //Login
    Logar = async (modeloLogin)  => {
       const resp = await api.post("/login", modeloLogin);
       return resp.data;
    }

    //Agendar novo - ambos
    SomenteDentistasDisponiveis = async (horario) => {
        const resp = await api.get("/agendamento/dentista/disponivel", horario)
        return resp.data;
    }

    PegarValorDaConsulta = async (dadosDoPagamento) => {
        const resp = await api.get("/agendamento/valordaconsulta", dadosDoPagamento);
        return resp.data;
    }

    //Agendar novo - cliente
    AgendarConsultaPorCliente = async (dadosDaConsulta) => {
        const resp = await api.post("/agendamento/cadastrar/cliente", dadosDaConsulta);
        return resp;
    }

    //Agendar novo - funcionário
    AgendarConsultaPorFuncionario = async (dadosDaConsulta) => {
        const resp = await api.post("/agendamento/cadastrar/funcionario", dadosDaConsulta);
        return resp;
    }

    
    RemarcarConsulta = async (novoHorario) => {
        const resp = await api.put("/agendamento/remarcar");
        return resp;
    }

    AvaliarConsulta = async (modeloAvaliacao) => {
        const resp = await api.post('/Feedback', modeloAvaliacao);
        return resp;
    }

    CancelarConsulta = async (idConsulta) => {
        const resp = await api.put(`/agendamento/cancelar/${idConsulta}`);
        return resp;
    }

    AlterarSituacao = async (idConsulta, novaSituacao) => {
        const resp = await api.put(`/agendamento/situacao/${idConsulta}?novaSituacao=${novaSituacao}`);
        return resp;
    }


}
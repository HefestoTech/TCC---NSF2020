import React, { useEffect, useState } from 'react'
import './verfunci.css'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';
import OdontoApi from "../../Services/OdontoApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Components/Loading";
import { Link, useHistory } from 'react-router-dom';
import MostrarFeedback from "../../Components/TelaVerFeed"

const api = new OdontoApi();

export default function VerAgendaFunc(props){

    const [mostraLoading, setMostrarLoading] = useState(false);
    const [servicos, setServicos] = useState([]);
    const [servicoFiltro, setServicoFiltro] = useState("");
    const [nomeProfissional, setNomeProfissonal] = useState("");
    const [nomeCliente, setNomeCliente] = useState("");
    const [data, setData] = useState("01-01-0001")
    const [hora, setHora] = useState("00:00");
    const [situacao, setSituacao] = useState("");
    const [filtrado, setFiltrado] = useState([]);
    const [novaSituacao, setNovaSituacao] = useState("");
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [mostrarFeedbackCliente, setMostrarFeedbackCliente] = useState(false);
    const [nota, setNota] = useState();
    const [comentario, setComentario] = useState();
    const history = useHistory();
    
    const IrParaTelaDeRemarcar = (idAgendamento) => {
      history.push({
        pathname: "/remarcar",
        state: { responseCompleto, idAgendamento: idAgendamento },
      });
    };

     const cancelarConsultaClick = async (idConsulta) => {
       try {
         setMostrarLoading(true)

         api.CancelarConsulta(idConsulta);

         filtrar();

         setMostrarLoading(false);

         toast.success("A consulta foi cancelada com sucesso");
       } catch (e) {
         setMostrarLoading(false);

         toast.error(e.response.data.erro);
       }
     };

    const carregarServicos = async() => {
        try {
            const resp = await api.PegarServicos();

            setServicos(resp);
            
        } catch (e) {
            toast.error("Houve um erro ao carregar os serviço. Tente novamente mais tarde.")
        }
    }

    const chamarFuncoes = () => {
        verSeLogouNoSistema();
        carregarServicos();
        filtrar();
    }

    const transformarEmDataComMinutos = () => {

        const horarioEDataDaConsulta = `${data} ${hora}`;
        return horarioEDataDaConsulta;
       
    };

    const filtrar = async() => {
        try {
            
       
        setMostrarLoading(true);
            
        const horarioCompleto = transformarEmDataComMinutos();
            
        const resp = await api.PegarConsultasFuncionario(nomeCliente, servicoFiltro, nomeProfissional, horarioCompleto, situacao)
        setFiltrado(resp);
           
        setMostrarLoading(false)
       
      
       
      } catch (e) {

        setMostrarLoading(false);

        toast.error(e.response.data.erro);
        }
    }

    const alterarSituacao = async(idConsulta) => {
        try {
             setMostrarLoading(true);
            
            if(novaSituacao == ""){
               toast.error("Você não alterou a situação");
               setMostrarLoading(false);
            }
        
           else{

            const resp = await api.AlterarSituacao(idConsulta, novaSituacao);

            console.log(resp);

            filtrar();

            toast.success("Situação alterada com sucesso.");
           }

        } catch (e) {

            setMostrarLoading(false)
            toast.error(e.response.data.erro);
            
        }
    }

    const mostrarFeedback = (notaDaConsulta, comentarioDaConsulta) => {   
         setMostrarFeedbackCliente(true);
         setNota(notaDaConsulta);
          if(comentarioDaConsulta == null || comentarioDaConsulta == "")
            setComentario("*(O cliente não comentou sobre a consulta)");
          else  
            setComentario(comentarioDaConsulta);
    }

    const naoMostrarFeedback = () => {
        setMostrarFeedbackCliente(false);
        setNota(null);
        setComentario(null);
    }

    const verSeLogouNoSistema = () => {
      if (responseCompleto === undefined)
        history.push({ pathname: "/login" });
    };

    useEffect(() => {
      chamarFuncoes();
    }, []);

      


    return (
      <div className="fundoAgen">
        {mostrarFeedbackCliente === true && (
          <div className="completoVerFeed">
            <div className="VerFeedOne">
              <div className="Back999">
                <h2 className="h2VerFeed"> Avaliação da Consulta</h2>
                <i
                  onClick={naoMostrarFeedback}
                  class=" back100 fas fa-chevron-circle-left"
                ></i>
              </div>
              <div className="VerFeedTwo">
                <div className="VerFeedTheer">
                  <i class=" starzinnn far fa-star"></i>
                  <p className="Aval">{nota}</p>
                </div>

                <input
                  readOnly
                  value={comentario}
                  className="inputVer form-control"
                ></input>
              </div>
            </div>
          </div>
        )}

        {mostraLoading == true && (
          <div>
            <Loading />
          </div>
        )}
        <ToastContainer />

        <Menu
          nome={responseCompleto.nome.substr(
            0,
            responseCompleto.nome.indexOf(" ")
          )}
        />

        <div className="bodyVerAgendadosFunc">
          <div className="AgenOne">
            <h1 className="hOndeAgen">Informarções da Consulta</h1>
            <h3 className="hTwoAgen">Todos os Agendamentos</h3>
          </div>

          <div className="h3star">
            <h3>Selecione um filtro:</h3>
          </div>

          <div className="starDiv">
            <form class="formOneee form-inline my-2 my-lg-0">
              <input
                onChange={(e) => setNomeCliente(e.target.value)}
                class="form-control mr-sm-2 btnnTwo"
                type="search"
                placeholder="Nome do Cliente"
                aria-label="Pesquisar"
              ></input>
            </form>

            <input
              onChange={(e) => setNomeProfissonal(e.target.value)}
              class="formTwo  form-control mr-sm-2 btnnTwo"
              type="search"
              placeholder="Nome do Doutor(a)"
              aria-label="Pesquisar"
            ></input>

            <select
              onChange={(e) => setServicoFiltro(e.target.value)}
              className="form-control espec"
            >
              <option value="">Especialização</option>
              {servicos.map((x) => (
                <option value={x.nomeServico}>{x.nomeServico}</option>
              ))}
            </select>

            <input
              onChange={(e) => setData(e.target.value)}
              type="date"
              className=" form-control formTheerDate "
            ></input>

            <input
              onChange={(e) => setHora(e.target.value)}
              type="time"
              className="form-control formFourTime"
            ></input>

            <select
              onChange={(e) => setSituacao(e.target.value)}
              className="form-control situcionForm"
            >
              <option value="">Situação</option>

              <option value="Concluido">Concluido</option>

              <option value="Não Compareceu">Não Compareceu</option>

              <option value="Agendado">Agendado</option>

              <option value="Cancelado">Cancelado</option>
            </select>

            <button
              onClick={filtrar}
              type="button"
              class="btn btn-outline-info btn_agendadosFunc"
            >
              <i className="fas fa-search iconSearch" />
            </button>
          </div>

          {filtrado.map((x) => (
            <div className="boxCons">
              <div className="TtsCons">
                <h3>Dados da consulta</h3>
                <h3>Pagamento da consulta</h3>
              </div>

              <div className="BoxForms">
                <div className="geralCons">
                  <div className="lineForm1">
                    <div className="nameCons">
                      <h5>Nome: </h5>
                      <input
                        value={x.nomeCliente}
                        type="text"
                        readOnly
                        className="nam form-control"
                      />
                    </div>

                    <div className="dateCons">
                      <h5>Data:</h5>
                      <input
                        value={new Date(x.data).toLocaleString()}
                        type="text"
                        readOnly
                        className="date form-control"
                      />
                    </div>
                  </div>

                  <div className="lineForm2">
                    <div className="servCons">
                      <h5>Serviço:</h5>
                      <input
                        value={x.servico}
                        type="text"
                        readOnly
                        className="serv form-control"
                      />
                    </div>

                    <div className="drCons">
                      <h5>Doutor:</h5>
                      <input
                        value={x.doutor}
                        type="text"
                        readOnly
                        className="dr form-control"
                      />
                    </div>

                    <div className="sitCons">
                      <h5>Situação:</h5>
                      <select
                        onChange={(e) => setNovaSituacao(e.target.value)}
                        className="form-control"
                      >
                        <option selected value={x.situacao}>
                          {x.situacao}
                        </option>
                        <option value="Não Compareceu">Não Compareceu</option>
                        <option Value="Concluido">Concluído</option>
                      </select>
                    </div>
                  </div>

                  <div className="lineForm4">
                    {x.situacao == "Agendado" && (
                      <button
                        onClick={() => IrParaTelaDeRemarcar(x.idConsulta)}
                        className="buttonnn btn btn-primary"
                      >
                        Remarcar
                      </button>
                    )}

                    {x.situacao == "Não Compareceu" && (
                      <button
                        onClick={() => IrParaTelaDeRemarcar(x.idConsulta)}
                        className="buttonnn btn btn-primary"
                      >
                        Remarcar
                      </button>
                    )}

                    {x.nota != null && (
                      <button
                        onClick={() => mostrarFeedback(x.nota, x.comentario)}
                        className="bt1 btn btn-danger"
                      >
                        Ver Feedback do Cliente
                      </button>
                    )}

                    {x.nota == null && x.situacao == "Concluido" && (
                      <div>
                        <h4>O Cliente ainda não avaliou a consulta.</h4>
                      </div>
                    )}
                  </div>
                </div>
                <div className="pagmCons">
                  <div className="linePag1">
                    <div className="formPag">
                      <h5>Forma de Pagamento:</h5>
                      <div className="radios custom-control-inline">
                        <input
                          readOnly
                          value={x.formaPagamento}
                          className="desc form-control"
                        />
                      </div>
                    </div>

                    <div className="formSub">
                      <h5>Subtotal:</h5>
                      <input
                        type="text"
                        readOnly
                        className="subTot form-control"
                        value={"R$" + x.subtotal}
                      />
                    </div>

                    <p className="totalPorMesAgendar totMesColor">
                      ( {x.parcelas}X de R${x.totalPorMes} )
                    </p>
                  </div>

                  <div className="linePag2">
                    <div className="formDescont">
                      <h5>Desconto:</h5>
                      <input
                        value={"R$" + x.desconto}
                        type="text"
                        readOnly
                        className="desc form-control"
                      />
                    </div>

                    <div className="formTotal">
                      <h5>Valor Total:</h5>
                      <input
                        value={"R$" + x.valorTotal}
                        type="text"
                        className="tota form-control"
                      />
                    </div>
                  </div>

                  <div className="linePag3">
                    <div className="buttsPag">
                      {x.situacao == "Agendado" && (
                        <button
                          onClick={() => cancelarConsultaClick(x.idConsulta)}
                          className=" bt1 btn btn-danger"
                        >
                          Cancelar consulta
                        </button>
                      )}

                      <button
                        onClick={() => alterarSituacao(x.idConsulta)}
                        className="buttonnn btn btn-primary"
                      >
                        Alterar Situacao
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Rodape></Rodape>
      </div>
    );
}
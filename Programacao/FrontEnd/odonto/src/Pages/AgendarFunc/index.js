import './agendafunc.css'
import OdontoApi from '../../Services/OdontoApi'
import Calendar from '../../Assets/Fotos/calendar.svg'
import Dentes from '../../Assets/Fotos/dentes.png'
import ArrowLeft from '../../Assets/Fotos/left-arrow.svg'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const odontoApi = new OdontoApi();

export default function AgendarConsultaCliente (props) {
    
    const [responseCompleto, setResponseCompleto] = useState(
      props.location.state
    );

    const [idFuncionario, setIdFuncionario] = useState(0);
    const [date, setDate] = useState(null);
    const [hora, setHora] = useState(null);
    const [idServico, setIdServico] = useState(0);
    const [servico, setServico] = useState([]);
    const [profissional, setProfissional] = useState([]);
    const [formpagm, setFormpagm] = useState("Dinheiro");
    const [parcelas, setParcelas] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);
    const [valorParcelado, setValorParcelado] = useState(0);
    const [novoHorario, setNovoHorario] = useState(null);
    const [emailCliente, setEmailCliente] = useState("");
    
    const pegarServicos = async () => {
      const resp = await odontoApi.PegarServicos();

      setServico(resp);
    };

     const valorParceladoClick = (parcela) => {
       setParcelas(parcela);

       pegarValorDaConsulta(idServico, formpagm);

       const x = total / parcela;

       setValorParcelado(x.toFixed(2));
     }; 

    const agendarClick = async () => {
      try {
        if (date === null) {
          toast.error("A data é obrigatória");
          return false;
        } else if (hora === null) {
          toast.error("A hora é obrigatória");
          return false;
        } else {
          const resp = await odontoApi.AgendarConsultaPorFuncionario({
            "IdFuncionario": idFuncionario,
            "IdServico": idServico,
            "EmailCliente": emailCliente,
            "Data": novoHorario,
            "FormaDePagamento": formpagm,
            "QtdParcelas": parcelas,
            "SubTotal": subtotal,
            "Desconto": desconto,
            "ValorTotal": total,
          });

          toast.success("Consulta agendada com sucesso");
        }
      } catch (e) {
        toast.error(e.response.data.erro);
        
        console.log(e.response.data)
        console.log("Meu errooooo")
      }
    };

    const transformarEmDataComMinutos = (data, horario) => {
      const horarioEDataDaConsulta = `${data} ${horario}`;

      setDate(data);
      setHora(horario);

      setNovoHorario(horarioEDataDaConsulta);

      return horarioEDataDaConsulta;
    };

    const pegarProfissional = async (data, hora) => {
      try {
        const novoHorario = transformarEmDataComMinutos(data, hora);

        const resp = await odontoApi.SomenteDentistasDisponiveis(novoHorario);

        setProfissional(resp);
      } catch (e) {
        setProfissional([]);
        toast.error(e.response.data.erro);
      }
    };

    const pegarValorDaConsulta = async (id, formaDePagamento) => {
      try {
        setIdServico(id);

        setFormpagm(formaDePagamento);

        const resp = await odontoApi.PegarValorDaConsulta(
          id,
          formaDePagamento,
          parcelas
        );

        setSubtotal(resp.subtotal);
        setDesconto(resp.desconto);
        setTotal(resp.total);
        setValorParcelado(resp.total / parcelas);
      } catch (e) {
        toast.error(e.response.data.erro);
      }
    };

    useEffect(() => {
      pegarServicos();
    }, []);


    return(
        <div className="ContAgendarF backgr">
            <ToastContainer/>
            
            <div className="BodyF shadow-lg p-3 mb-5 bg-white rounded">
                <div className="TtAgendF">
                <Link to={{ pathname: "/menu/funcionario", state: responseCompleto}} ></Link><h1>Agende sua Consulta</h1>
                </div>

                <div className="BodyAgendF">
                    <div className="BoxAgendF">                  
                            <div className="lineAgend1F">
                              <div className="Tt2AgendF">
                                  <h4>Os campos marcados com(*) são obrigatórios.</h4>
                              </div>
                            </div>

                            <div className="lineAgend2F">
                                <div className="formDateF">
                                    <h5>Selecione uma data:</h5>
                                    <input type="date" className="form-control" 
                                    onChange={(e) => pegarProfissional(e.target.value, hora)}
                                    />
                                </div>

                                <div className="formHourF">
                                    <h5>Selecione uma hora:</h5>
                                    <input type="time" className="form-control" 
                                    onChange={e => pegarProfissional(date, e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="lineAgend3F">
                                <div className="formServF">
                                    <h5>Selecione um serviço:</h5>
                                    <select onChange={(e) => pegarValorDaConsulta(Number(e.target.value), formpagm)} className="form-control" >
                                        <option value="0"></option>
                                        {servico.map(x => <option value={x.idServico}>{x.nomeServico}</option> )}
                                    </select>
                                </div>

                                <div className="formProfF">
                                    <h5>Escolha um profissional:</h5>
                                    <select onChange={e => setIdFuncionario(Number(e.target.value))} className="form-control" >
                                        <option value="0"></option>
                                        {profissional.map (x => 
                                        <option value={x.id}>{x.nome}</option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="lineAgend4F">
                                <div className="formeE-mailF">
                                    <h5>Digite o e-mail do cliente:</h5>
                                    <input onChange={e => setEmailCliente(e.target.value)} class="form-control mr-sm-2 btnnTwo" type="search" placeholder="Fulano@example.com" aria-label="Pesquisar" />
                                </div>
                            </div>
                    </div>

                    <div className="BoxPagmtF">
                        <h2>Pagamento da consulta</h2>

                        <div className="linePag1F">
                                <div className="formPagmF">
                                    <h5>Selecione a forma de Pagamento:</h5>
                                        <div className="selectPagF  custom-radio custom-control-inline">
                                            
                                            <select onChange={(e) => pegarValorDaConsulta(idServico, e.target.value)} className="form-control">
                                                <option value="Dinheiro">Dinheiro</option>
                                                <option value="Cartão">Cartão</option>
                                            </select>
                                            
                                        </div>
                                  </div>

                                <div className="formParcF">
                                    <h5>Quantidade de parcelas:</h5>
                                    <input value={parcelas} type="number" className="qtdParcF form-control" min="1" max="8" 
                                    onChange={e => valorParceladoClick(e.target.value)}
                                    />
                                </div>

                        </div>


                        <div className="linePag2F">

                                <div className="formDescF">
                                   <h5>Desconto:</h5>
                                   <input type="text" readOnly className="DescF form-control" placeholder="R$ 0,00" 
                                   value={"R$" + desconto}
                                   />

                                  <p className="totalPorMesAgendarF">( {parcelas}X de R${valorParcelado} )</p>
                                </div>

                                <div className="formSubF">
                                    <h5>SubTotal:</h5>
                                    <input type="text" readOnly className="SubtF form-control" placeholder="R$ 0,00" 
                                    value={"R$" + subtotal}
                                    />
                                </div>
                          

                                <div className="formTotF">
                                    <h5>Total:</h5>
                                    <input type="text" readOnly className="TotalF form-control" placeholder="R$ 0,00"
                                    value={"R$" + total}
                                    />
                                </div>
                              
                          </div>

                          <div className="linePag3F">
                                <div className="ButtPagF">
                                    <button onClick={agendarClick} className="btnCadF btn btn-primary">
                                        <h4>Agendar</h4><img src={Calendar}/></button>
                                </div>
                          </div>
                        
                    </div>

                </div>

            </div>
                    
                         
        </div>

    )
}  

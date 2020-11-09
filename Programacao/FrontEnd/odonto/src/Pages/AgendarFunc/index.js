import './agendafunc.css'
import OdontoApi from '../../Services/OdontoApi'
import Calendar from '../../Assets/Fotos/calendar.svg'
import Dentes from '../../Assets/Fotos/dentes.png'
import ArrowLeft from '../../Assets/Fotos/left-arrow.svg'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const odontoApi = new OdontoApi();

export default function AgendarConsultaCliente (props) {
    
    const [responsecompleto, setResponsecompleto] = useState(props.location.state);
    const [idfuncionario, setIdfuncionario] = useState();
    const [date, setDate] = useState("2020-09-07");
    const [hora, setHora] = useState("09:00");
    const [idServico, setIdServico] = useState(1);
    const [servico, setServico] = useState([]);
    const [profissional, setProfissional] = useState();
    const [formpagm, setFormpagm] = useState("Dinheiro");
    const [parcelas, setParcelas] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);
    const [valorParcelado, setValorParcelado] = useState(0);

    const pegarServicos = async () => {  
        const resp = await odontoApi.PegarServicos(); 
        
        setServico(resp) 
    };

    const agendarClick = async() => {
        try {

           
             const resp = await odontoApi.AgendarConsultaPorCliente({       
                "IdCliente": 1,
                "IdFuncionario": 2,
                "IdServico": 2,
                "Data": "2020-11-11 16:00",
                "FormaDePagamento": "1",
                "QtdParcelas": 1,
                "SubTotal": 400,
                "Desconto": 0,
                "ValorTotal": 400
            })
    
        console.log(resp);
        } catch (e) {
            console.log(e.response.data.erro)
        }
    }

    
    useEffect(() => {
    pegarServicos();
    }, [])

    const transformarEmDataComMinutos = () => {
         
         const horarioEDataDaConsulta = `${date} ${hora}`;
         return horarioEDataDaConsulta;
      }

    const pegarProfissional = async() =>{
        try {
            const horario = transformarEmDataComMinutos();
        
            const horarioRequest = ({"Horario": "2020-10-26 16:00" })

            /*const request = {
                "IdAgendamento":idAgendamento,
                "NovoHorario": dataFinal
            };
            */
            
            const resp = await odontoApi.SomenteDentistasDisponiveis({
                "Horario": "2020-11-10 16:00" 
            })
        
            
                
        } catch (e) {

            
        }
    }


    const pegarValorDaConsulta  = async (id, formaDePagamento) => {
        try {

            setIdServico(id);
            console.log(formaDePagamento)
                
            setFormpagm(formaDePagamento)


            const resp = await odontoApi.PegarValorDaConsulta({
                "IdServico": id,
                "FormaDePagamento": formaDePagamento,
                "QuantidadeParcelas": 8
            }); 

            setSubtotal(resp.subtotal);
            setDesconto(resp.desconto);
            setTotal(resp.total);
            setValorParcelado(resp.valorParcelado);
            
            
        } catch (e) {
           
            
        }
    }

    return(
        <div className="ContAgendarF backgr">
            <Link to="/" ><h1 className="TtLogoF">ODONTO</h1></Link>
            <div className="BodyAgendF shadow-lg p-3 mb-5 bg-white rounded">
                <div className="TtAgendF">
                    <img src={ArrowLeft} className="arrleft" /><h1>Agende sua Consulta<i class="fas fa-tooth colodent"></i><img src={Dentes} className="teethicon" /></h1>
                </div>

                <div className="BoxAgenFd">
                        <div className="lineAgend1F">
                            <div className="formDateF">
                                <h5>Selecione uma data:</h5>
                                <input type="date" className="form-control" 
                                onChange={(e) => pegarProfissional(setDate(e.target.value))}
                                />
                            </div>

                            <div className="formHourF">
                                <h5>Selecione uma hora:</h5>
                                <input value={hora} type="time" className="form-control" 
                                onChange={e => setHora(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="lineAgend2F">
                            <div className="formServF">
                                <h5>Selecione um serviço:</h5>
                                <select onChange={(e) => pegarValorDaConsulta(Number(e.target.value), formpagm)} className="form-control" >
                                    {servico.map(x => <option value={x.idServico}>{x.nomeServico}</option> )}
                                
                                </select>
                            </div>

                            <div className="formProfF">
                                <h5>Escolha um profissional:</h5>
                                <select className="form-control" >
                                    <option>Mauricio</option>
                                </select>
                            </div>
                        </div>
                        <div className="lineAgend3F">
                            <div className="formeE-mailF">
                                <h5>Digite o e-mail do cliente:</h5>
                                <input class="form-control mr-sm-2 btnnTwo" type="search" placeholder="Fulano@example.com" aria-label="Pesquisar" />
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
                    </div>

                    <div className="linePag2F">
                        <div className="formParcF">
                            <h5>Quantidade de parcelas:</h5>
                            <input value={parcelas} type="number" className="qtdParcF form-control" min="1" max="8" 
                            onChange={e => setParcelas(e.target.value)}
                            />
                        </div>

                        <div className="formSubF">
                            <h5>SubTotal:</h5>
                            <input type="text" readOnly className="SubtF form-control" placeholder="R$ 0,00" 
                            value={"R$" + subtotal}
                            />
                            
                        </div>

                        <p className="totalPorMesAgendarF">( {parcelas}X de R${valorParcelado} )</p>
                    </div>

                    <div className="linePagm3F">
                        <div className="formDescF">
                            <h5>Desconto:</h5>
                            <input type="text" readOnly className="DescF form-control" placeholder="R$ 0,00" 
                            value={"R$" + desconto}
                            />
                        </div>

                        <div className="formTotF">
                            <h5>Total:</h5>
                            <input type="text" readOnly className="TotalF form-control" placeholder="R$ 0,00"
                            value={"R$" + total}
                            />
                        </div>

                        <div className="ButtPagF">
                            <button onClick={agendarClick} className="btnCadF btn btn-primary">
                                <h4>Agendar</h4><img src={Calendar}/></button>
                        </div>
                    </div>


                </div>

            </div>
                    
                         
        </div>

    )
}  

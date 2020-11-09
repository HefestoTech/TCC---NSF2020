
import './agenda.css'
import OdontoApi from '../../Services/OdontoApi'
import Dente from '../../Assets/Fotos/dente.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const odontoApi = new OdontoApi();

export default function AgendarConsultaCliente (props) {
    
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [idfuncionario, setIdfuncionario] = useState();
    const [date, setDate] = useState("");
    const [hora, setHora] = useState();
    const [idServico, setIdServico] = useState(null);
    const [servico, setServico] = useState([]);
    const [profissional, setProfissional] = useState([]);
    const [formpagm, setFormpagm] = useState("Dinheiro");
    const [parcelas, setParcelas] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [total, setTotal] = useState(0);
    const [valorParcelado, setValorParcelado] = useState(0);
    const [novoHorario, setNovoHorario] = useState(null);


    const pegarServicos = async () => {  
        const resp = await odontoApi.PegarServicos(); 
        
        setServico(resp) 
    };

    const valorParceladoClick = (parcela) => {
        setParcelas(parcela);
        setValorParcelado(total / parcela);
    } 

    const agendarClick = async() => {
        try {
             const resp = await odontoApi.AgendarConsultaPorCliente({       
                "IdCliente": responseCompleto.idUsuario,
                "IdFuncionario": idfuncionario,
                "IdServico": idServico,
                "Data": novoHorario,
                "FormaDePagamento": formpagm,
                "QtdParcelas": parcelas,
                "SubTotal": subtotal,
                "Desconto": desconto,
                "ValorTotal": total
            });
    
        console.log(resp);

        toast.success("Consulta agendada com sucesso");
        } catch (e) {
            toast.error(e.response.data.erro);
            
            console.log(e.response.data)
        }
    }

    
    useEffect(() => {
    pegarServicos();
    }, [])

    const transformarEmDataComMinutos = (data, horario) => {
         
         const horarioEDataDaConsulta = `${data} ${horario}`;
        
         setDate(data);
         setHora(horario);
         
         setNovoHorario(horarioEDataDaConsulta);

         return horarioEDataDaConsulta;

      }

    const pegarProfissional = async(data, hora) =>{
        try {
            const novoHorario = transformarEmDataComMinutos(data, hora);
            
            const resp = await odontoApi.SomenteDentistasDisponiveis(novoHorario);

            setProfissional(resp);    
                
        } catch (e) {

                toast.error(e.response.data.erro);
        }
    }


    const pegarValorDaConsulta  = async (id, formaDePagamento) => {
        try {

            setIdServico(id);
                
            setFormpagm(formaDePagamento)


            const resp = await odontoApi.PegarValorDaConsulta(id, formaDePagamento, parcelas); 

            setSubtotal(resp.subtotal);
            setDesconto(resp.desconto);
            setTotal(resp.total);
            setValorParcelado(resp.total / parcelas);
            
            
        } catch (e) {

            console.log(e.response.data);
           
            
        }
    }

    return(
        <div className="ContAgendar backg">
        <ToastContainer/>
            <Link to="/" ><h1 className="TtLogo">ODONTO</h1></Link>
            <div className="BodyAgend shadow-lg p-3 mb-5 bg-white rounded">
                <div className="TtAgend">
                    <h1>Agende sua Consulta<img src={Dente} /></h1>
                    <h4>Os campos com(*) são obrigratórios</h4>
                </div>

                <div className="BoxAgend">
                        <div className="lineAgend1">
                            <div className="formDate">
                            <h5>Selecione uma data:</h5>
                            <input type="date" className="form-control" 
                             onChange={(e) => pegarProfissional(e.target.value, hora)}
                            />
                            </div>

                            <div className="formHour">
                            <h5>Selecione uma hora:</h5>
                            <input  type="time" className="form-control" 
                            onChange={e => pegarProfissional(date, e.target.value)}
                            />
                            </div>

                        </div>

                        <div className="lineAgend2">
                            <div className="formServ">
                                <h5>Selecione um serviço:</h5>
                                <select onChange={(e) => pegarValorDaConsulta(Number(e.target.value), formpagm)} className="form-control" >
                                    <option value=""></option>
                                    {servico.map(x => <option value={x.idServico}>{x.nomeServico}</option> )}
                                
                                </select>
                            </div>

                            <div className="formProf">
                                <h5>Escolha um profissional:</h5>
                                <select onChange={e => setIdfuncionario(e.target.value)} className="form-control" >
                                <option value=""></option>
                                {profissional.map (x => 
                                  <option value={x.id}>{x.nome}</option>
                                )}
                                </select>
                            </div>
                        </div>
                </div>

                <div className="BoxPagmt">
                    <h2>Pagamento da consulta</h2>

                    <div className="linePag1">
                        <div className="formPagm">
                        <h5>Selecione a forma de Pagamento:</h5>
                            <div className="radPag  custom-radio custom-control-inline">
                                
                                <select onChange={(e) => pegarValorDaConsulta(idServico, e.target.value)} className="form-control">
                                    <option value="Dinheiro">Dinheiro</option>
                                    <option value="Cartão">Cartão</option>
                                </select>
                                
                            </div>
                        </div>
                    </div>

                    <div className="linePag2">
                        <div className="formParc">
                            <h5>Quantidade de parcelas:</h5>
                            <input value={parcelas} type="number" className="qtdParc form-control" min="1" max="8" 
                            onChange={e => valorParceladoClick(e.target.value)}
                            />
                        </div>

                        <div className="formSub">
                            <h5>SubTotal:</h5>
                            <input type="text" readOnly className="Subt form-control" placeholder="R$ 0,00" 
                            value={"R$" + subtotal}
                            />
                            
                        </div>

                        <p className="totalPorMesAgendar">( {parcelas}X de R${valorParcelado} )</p>
                    </div>

                    <div className="linePagm3">
                        <div className="formDesc">
                            <h5>Desconto:</h5>
                            <input type="text" readOnly className="Desc form-control" placeholder="R$ 0,00" 
                            value={"R$" + desconto}
                            />
                        </div>

                        <div className="formTot">
                            <h5>Total:</h5>
                            <input type="text" readOnly className="Total form-control" placeholder="R$ 0,00"
                            value={"R$" + total}
                            />
                        </div>

                        <div className="ButtPag">
                            <button onClick={agendarClick} className="btnCad btn btn-primary"><h4>Agendar</h4></button>
                        </div>
                    </div>


                </div>

            </div>
                    
                         
        </div>

    )
}  



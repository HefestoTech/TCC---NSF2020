
import './agenda.css'
import OdontoApi from '../../Services/OdontoApi'
import Dente from '../../Assets/Fotos/dente.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const odontoApi = new OdontoApi();

export default function AgendarConsultaCliente (props) {
    
    const [responsecompleto, setResponsecompleto] = useState(props.location.state);
    const [idfuncionario, setIdfuncionario] = useState();
    const [date, setDate] = useState();
    const [hora, setHora] = useState();
    const [idservico, seIdservico] = useState();
    const [servico, setServico] = useState([]);
    const [profissional, setProfissional] = useState();
    const [formpagm, setFormpagm] = useState();
    const [parcelas, setParcelas] = useState();
    const [subtotal, setSubtotal] = useState();
    const [desconto, setDesconto] = useState();
    const [total, setTotal] = useState();

    const pegarServicos = async () => {  
        const resp = await odontoApi.PegarServicos(); 
        setServico(resp) 
    };

    const agendarClick = async() => {
        const resp = await odontoApi.AgendarConsultaPorCliente({
            "IdCliente":responsecompleto.IdUsuario,
            "IdFuncionario": idfuncionario,
            "IdServico": idservico,
            "Data": date,
            "FormaDePagamento": formpagm,
            "QtdParcelas": parcelas,
            "SubTotal": subtotal,
            "Desconto": desconto,
            "Total": total
        })
    }

    
    useEffect(() => {
    pegarServicos();
    }, [])

    const transformarEmDataComMinutos = () => {
         
         const horarioEDataDaConsulta = `${date} ${hora}`;
         return horarioEDataDaConsulta;
      }

    const pegarProfissional = async() =>{
        const horario = transformarEmDataComMinutos();
        const req = {"Horario":horario}
        console.log(req)
        const resp = await odontoApi.SomenteDentistasDisponiveis(req)
        console.log(horario)
        console.log(resp)
    }

    return(
        <div className="ContAgendar backg">
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
                            onChange={(e) => pegarProfissional(setDate(e.target.value))}
                            />
                            </div>

                            <div className="formHour">
                            <h5>Selecione uma hora:</h5>
                            <input  type="time" className="form-control" 
                            onChange={e => setHora(e.target.value)}
                            />
                            </div>

                        </div>

                        <div className="lineAgend2">
                            <div className="formServ">
                                <h5>Selecione um serviço:</h5>
                                <select className="form-control" >
                                    {servico.map(x => <option>{x.nomeServico}</option>) }
                                
                                </select>
                            </div>

                            <div className="formProf">
                                <h5>Escolha um profissional:</h5>
                                <select className="form-control" >
                                    <option>Mauricio</option>
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
                                
                                <input type="radio" name="pagm" className="din"
                                onChange={e => setFormpagm(e.target.checked ?"Dinheiro":null)}
                                /> <h5>Dinheiro</h5>


                                <input type="radio" name="pagm"  className="cart" 
                                onChange={e => setFormpagm(e.target.checked ?"Cartão":null)}
                                /> <h5>Cartão</h5>
                                
                            </div>
                        </div>
                    </div>

                    <div className="linePag2">
                        <div className="formParc">
                            <h5>Quantidade de parcelas:</h5>
                            <input type="number" className="qtdParc form-control" min="1" max="8" 
                            onChange={e => setParcelas(e.target.value)}
                            />
                        </div>

                        <div className="formSub">
                            <h5>SubTotal:</h5>
                            <input type="text" readOnly className="Subt form-control" placeholder="R$ 0,00" 
                            value={subtotal}
                            />
                        </div>
                    </div>

                    <div className="linePagm3">
                        <div className="formDesc">
                            <h5>Desconto:</h5>
                            <input type="text" className="Desc form-control" placeholder="R$ 0,00" 
                            value={desconto}
                            />
                        </div>

                        <div className="formTot">
                            <h5>Total:</h5>
                            <input type="text" readOnly className="Total form-control" placeholder="R$ 0,00"
                            value={total}
                            />
                        </div>

                        <div className="ButtPag">
                            <button className="btnCad btn btn-primary"><h4>Agendar</h4></button>
                        </div>
                    </div>


                </div>

            </div>
                    
                         
        </div>

    )
}  



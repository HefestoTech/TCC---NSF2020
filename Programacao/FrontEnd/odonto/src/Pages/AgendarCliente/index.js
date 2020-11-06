
import './agenda.css'
import OdontoApi from '../../Services/OdontoApi'
import Dente from '../../Assets/Fotos/dente.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const odontoApi = new OdontoApi();

export default function AgendarConsultaCliente (props) {
    
    const [responsecompleto, setResponsecompleto] = useState(props.location.state);
    const [idfuncionario, setIdfuncionario] = useState();
    const [date, setDate] = useState("2020-09-07");
    const [hora, setHora] = useState("08:00");
    const [idServico, setIdServico] = useState();
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
            "IdCliente":1,
            "IdFuncionario": 2,
            "IdServico": 3,
            "Data": "2020-11-10 16:00",
            "FormaDePagamento": "Dinheiro",
            "QtdParcelas": 1,
            "SubTotal": 100,
            "Desconto": 20,
            "Total": 400
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
            
            const resp = await odontoApi.SomenteDentistasDisponiveis({"Horario": "2020-11-10 16:00" })
        
            console.log(resp)
                
        } catch (e) {

            console.log(e.response.data)
        }
    }


    const pegarValorDaConsulta  = async (id) => {
        try {
            
            

            const resp = await odontoApi.PegarValorDaConsulta({
                "IdServico": 1,
    "FormaDePagamento": "Cartão",
    "QuantidadeParcelas": 8
}  );

            setSubtotal(resp.subtotal);
            setDesconto(resp.desconto);
            setTotal(resp.total);
            setValorParcelado(resp.valorParcelado);
            
            
        } catch (e) {
            console.log(e.response.data)
            
        }
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
                            <input value={hora} type="time" className="form-control" 
                            onChange={e => setHora(e.target.value)}
                            />
                            </div>

                        </div>

                        <div className="lineAgend2">
                            <div className="formServ">
                                <h5>Selecione um serviço:</h5>
                                <select onChange={() => pegarValorDaConsulta(setIdServico(1))} className="form-control" >
                                    <option></option>
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
                                checked
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
                            <input value={parcelas} type="number" className="qtdParc form-control" min="1" max="8" 
                            onChange={e => setParcelas(e.target.value)}
                            />
                        </div>

                        <div className="formSub">
                            <h5>SubTotal:</h5>
                            <input type="text" readOnly className="Subt form-control" placeholder="R$ 0,00" 
                            value={"R$" + subtotal}
                            />
                        </div>
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



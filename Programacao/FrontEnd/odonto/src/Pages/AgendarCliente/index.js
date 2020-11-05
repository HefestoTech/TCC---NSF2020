
import React  from 'react';
import './agenda.css'
import Menu   from '../../Components/Menu'
import Rodape from '../../Components/Footer'

import Dente from '../../Assets/Fotos/dente.png'
import { Link } from 'react-router-dom';

export default function AgendarConsultaCliente () {
    return(
        <div className="ContAgendar">
            <Link to="/" ><h1 className="TtLogo">ODONTO</h1></Link>
            <div className="BodyAgend">
                <div className="TtAgend">
                    <h1>Agende sua Consulta<img src={Dente} /></h1>
                    <h4>Os campos com(*) são obrigratórios</h4>
                </div>

                <div className="BoxAgend">
                        <div className="lineAgend1">
                            <div className="formDate">
                            <h5>Selecione uma data:</h5>
                            <input type="date" className="form-control" />
                            </div>

                            <div className="formHour">
                            <h5>Selecione uma hora:</h5>
                            <input  type="time" className="form-control" />
                            </div>

                        </div>

                        <div className="lineAgend2">
                            <div className="formServ">
                                <h5>Selecione um serviço:</h5>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="formProf">
                                <h5>Escolha um profissional:</h5>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                </div>

                <div className="BoxPagmt">
                    <h2>Pagamento da consulta</h2>

                    <div className="linePag1">
                        <div className="formPagm">
                            <h5>Selecione a forma de Pagamento</h5>
                            <div className="radPag custom-control custom-radio custom-control-inline">
                                
                                <input type="radio" name="pagm"
                                /> <h5>Dinheiro</h5>


                                <input type="radio" name="pagm"  className="cart" 
                                /> <h5>Cartão</h5>
                                
                            </div>
                        </div>
                    </div>


                </div>

            </div>
                    
                         
        </div>

    )
}  



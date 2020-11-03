
import React from 'react'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import './consultar.css'

export default function ConsultarCliente() {

    return(
        <div className="ContCons">

            <Menu></Menu>

            <div className="BodyCons">

                <div className="Tt1Cons">
                    <h3 className="display-23">Meus Agendamentos</h3>
                </div>

                <div className="boxCons">
                    <div className="TtsCons">
                        <h3>Dados da consulta</h3>
                        <h3>Pagamento da consulta</h3>
                    </div>

                    <div className="BoxForms">
                            <div className="geralCons">

                                <div className="lineForm1">
                                    <div className="nameCons">
                                        <h5>Nome:</h5>
                                        <input type="text" readOnly className="nam form-control" placeholder="Fulano de Tal" />
                                    </div>
                                
                                    <div className="dateCons">
                                        <h5>Data:</h5>
                                        <input type="text" readOnly className="date form-control" placeholder="15/10/2020 12:30" />
                                    </div>
                                </div>


                            <div className="lineForm2">
                                    <div className="servCons">
                                        <h5>Serviço:</h5>
                                        <input type="text" readOnly className="serv form-control" placeholder="Limpeza" />
                                    </div>

                                    <div className="drCons">
                                        <h5>Doutor:</h5>
                                        <input type="text" readOnly className="dr form-control" placeholder="Celio Oliveira" />
                                    </div>

                                    
                                    <div className="sitCons">
                                        <h5>Situação:</h5>
                                        <input type="text" readOnly className="situ form-control" placeholder="Agendado" />
                                    </div>
                            </div>

                            
                            <div className="lineForm4">
                                    <button className="btn btn-primary">Remarcar</button>
                            </div>


                            </div>
                            <div className="pagmCons">
                                <div className="linePag1">

                                    <div className="formPag">
                                        <h5>Forma de Pagamento:</h5>
                                        <div className="radios custom-control-inline">
                                            
                                            <input type="radio" name="pag" className="din " /><h5>Dinheiro</h5>

                                            <input type="radio" name="pag"/><h5>Cartão</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="formSub">
                                        <h5>Subtotal:</h5>
                                        <input type="text" readOnly className="sub form-control" placeholder="R$ 1.500,00" />
                                    </div>
                                                                       
                                </div>

                                <div className="linePag2">
                                    <div className="formDescont">
                                        <h5>Desconto:</h5>
                                        <input type="text" readOnly className="desc form-control" />
                                    </div>

                                    <div className="formTotal">
                                        <h5>Valor Total:</h5>
                                        <input type="text" className="tota form-control" placeholder="R$ 1.500,00" />
                                    </div>
                                </div>  


                                <div className="linePag3">
                                    <div className="buttsPag">
                                        <button className="btn btn-danger">Cancelar consulta</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}
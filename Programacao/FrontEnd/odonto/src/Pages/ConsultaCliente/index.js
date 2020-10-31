
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
                    <h3>Meus Agendamentos</h3>
                </div>

                <div className="boxCons">
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
                       </div>

                       
                       <div className="lineForm3">
                            

                            <div className="sitCons">
                                <h5>Situação:</h5>
                                <input type="text" readOnly className="situ form-control" placeholder="Agendado" />
                            </div>
                       </div>

                       
                       <div className="lineForm4">
                            <button className="btn btn-primary">Remarcar</button>
                       </div>


                    </div>

                    <div className="pagmCons"></div>
                </div>

            </div>
            
            <Footer></Footer>
        </div>
    )
}
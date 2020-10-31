
import React from 'react'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import './consultar.css'

export default function ConsultarCliente() {

    return(
        <div className="ContCons">

            <Menu></Menu>

            <div className="BodyCons">

                <div className="Tt1">
                    <h3>Meus Agendamentos</h3>
                </div>

                <div className="boxCons">
                    <div className="geralCons">

                       <div className>
                       <label>Nome do Cliente:</label>
                        <input type="text" readOnly  />
                       </div>

                    </div>

                    <div className="pagmCons"></div>
                </div>

            </div>
            
            <Footer></Footer>
        </div>
    )
}
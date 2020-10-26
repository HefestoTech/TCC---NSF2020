
import React from 'react';
import './agenda.css'
import Menu from '../../Components/Menu'
import Rodape from '../../Components/Footer'

export default function AgendarConsultaCliente () {
    return(
        <div className="dad">
            
              <Menu/>
            <div className="mom">
              <h1 className="tituloagendar">Agende uma consulta</h1>
            
             <div className="linha1">
                    <div className="cardregistro">
                    <h5>Selecione uma data</h5>
                    <input  type="Date"   placeholder =" dd/mm/aaaa "  required ></input>
                 </div>


                <div className="cardregistro2">
                  <h5>Selecione um serviço</h5>
                  <input type="Text" Placeholder ="Clareamento" required></input>
                </div>
             </div>

             <div className="linha2">
                <div className="cardregistro3">
                 <h5>Selecione um Horario</h5>
                 <input type="Time" Placeholder ="00:00" required></input>
                </div>

               
               <div className="cardregistro4">
                   <h5>Escolha um profissional</h5>
                   <input type="text" placeholder="DrSiqueira" required></input>
               </div>
              </div> 
                    <div className="linha3">
                     <div className="cardregistro5">
                         <h5 >Digite seu e-mail</h5>
                         <input type= "email"   placeholder = "odonto@exemplo.com"  required ></input>
                     </div>
                    </div>

                    <div className="linha4">
                        <div className="cardregistro6">
                           <h5>Formas de pagamento</h5>
                          <div className="radios custom-control custom-radio custom-control-inline">
                             <input type="radio" name="pag"/><h5>Dinheiro</h5>
                             <input type="radio" name="pag" className="cards"/><h5>Cartão</h5>
                          </div>
                          
                         <div className="cardregistro7">
                             <h5>Parcelas</h5>
                            <input type="Number" min="1" max="8" required></input>
                          </div>

                        </div>

                     </div>  
            </div>          
            
        </div>  

    )
}  



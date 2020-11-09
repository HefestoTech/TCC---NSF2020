import React from 'react'
import './verfunci.css'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';

export default function VerAgendaFunc(){
    return(
        <div className="fundoAgen">
            
                <Menu></Menu>
           
                

                <div className="AgenOne">
                    <h1 className="hOndeAgen">Informarções da Consulta</h1>
                    <h3 className="hTwoAgen">Todos os Agendamentos</h3>
                </div>

            <div className="h3star">
                    <h3>Selecione um filtro:</h3>
                </div>
                
            
                <div className="starDiv">

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2 btnnTwo" type="search" placeholder="Nome do Cliente" aria-label="Pesquisar"></input>
                    
                </form>
                
                <select className="form-control espec">
                    <option>
                        Profissional
                    </option>
                </select>
                
                
                <select className="form-control espec">
                    <option> 
                        Especialização
                    </option>
                    <option>
                        Clareamento 
                    </option>
                </select>
                <input type="date" className=" form-control espec"></input>
                <input type="time" className="form-control espec"></input>


                <select className="form-control espec" >
                    <option>
                        Situação
                    </option>

                    <option>
                        Concluido
                    </option>

                    <option>
                        Não Compareceu
                    </option>

                    <option>
                        Agendado
                    </option>

                    <option>
                        Cancelado
                    </option>



                </select>

                <button type="button" class="btn btn-outline-info"><i className="fas fa-search iconSearch"/></button>

            </div>
            
            <Rodape></Rodape>
        </div>
        
        
    )
}
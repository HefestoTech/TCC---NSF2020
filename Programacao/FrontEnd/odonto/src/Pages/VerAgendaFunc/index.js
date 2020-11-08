import React from 'react'
import './verfunci.css'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';

export default function VerAgendaFunc(){
    return(
        <div className="fundoAgen">
            <div>
                <Menu></Menu>
            </div>
                

                <div className="AgenOne">
                    <h1>Informarções da Consulta</h1>
                    <h3>Todos os Agendamentos</h3>
                </div>

                <div>
                    <h3>Selecione um filtro</h3>
                </div>
                <div>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
                <select>
                    <option> 
                        Clareamneto
                    </option>
                </select>
                </div>


            <Rodape></Rodape>
        </div>
        
        
    )
}
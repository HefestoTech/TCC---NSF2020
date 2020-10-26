import React from 'react';
import Menu from '../../Components/Menu';
import './menu.css';
import Fotozinha from '../../Assets/deu tudo errado.png';

 export default function onepagesmenu ()
 {
     return(
        
        <div className="menu"> 
            <Menu/>

                 <div className= "fundo">

                    <div className = "titulotwo" ><h2>A SAÚDE COMEÇA PELA BOCA!</h2>
                    
                    <div >
                        <img className= "foto" src = {Fotozinha}></img>
                    </div>
                    
                    <div className = "botaolindo">
                    <button type="button" class="btn btn-outline-danger">Meus Agendamentos</button>
                    <button type="button" class="btn btn-outline-danger">Novo Agendamento</button>
                    </div>
                    </div>

                </div>
            
            
        </div>

        
     )
 }


import React, { useState } from 'react';
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';
import './menu.css';
import Fotozinha from '../../Assets/deu tudo errado.png';
import { Link } from 'react-router-dom';

 export default function MenuCliente(props)
 {
    
   
       const [idLogin, setIdLogin] =  useState(props.location.state.idLogin);
       const [idUsuario, setIdUsuario] = useState(props.location.state.idUsuario);
       const [nomeUsuario, setNomeUsario] = useState(props.location.state.nomeUsuario);
       const [perfil, setPerfil] = useState(props.location.state.perfil);
       
       console.log(idLogin);
       console.log(idUsuario);
       console.log(nomeUsuario);
       console.log(perfil);
      
       return(

        <>
        
        <div className="menu"> 
            <Menu/>

                 <div className= "fundo">

                    <div className = "titulotwo" ><h2>A SAÚDE COMEÇA PELA BOCA!</h2>
                    
                    <div >
                        <img className= "foto" src = {Fotozinha}></img>
                    </div>
                    
                    <div className = "botaolindo">
                    <Link to="/agendarconsultacliente"><button type="button" class="btn_1 btn btn-outline-danger">Meus Agendamentos</button></Link>
                    <button type="button" class="btn btn-outline-danger">Novo Agendamento</button>
                    </div>
                    </div>

                </div>
            
            
        </div>
         <Rodape/>
        </>
     )
 }


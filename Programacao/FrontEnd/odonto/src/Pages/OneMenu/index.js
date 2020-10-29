import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer';
import './menu.css';
import Fotozinha from '../../Assets/Fotos/deu tudo errado.png';
import { Link, useHistory } from 'react-router-dom';

 export default function MenuCliente(props)
 { 
        const [responseCompleto, setResponseCompleto] = useState(props.location.state)
        
        const history = useHistory();
        const validarUsuario = () => {
            if(responseCompleto.idUsuario == 0 || responseCompleto.idUsuario == null)
               history.push("/login"); 
        }

        useEffect(() => {
        validarUsuario();
        }, [])
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
                    <button type="button" class="btn_1 btn btn-outline-danger">Meus Agendamentos</button>
                    <Link to={{
                        pathname:`/agendarconsultacliente/${responseCompleto.idUsuario}`,
                        state:responseCompleto
                    }}><button type="button" class="btn_1 btn btn-outline-danger">Novo Agendamento</button></Link>
                    </div>
                    </div>

                </div>
            
            
        </div>
         <Rodape/>
        </>
     )
 }


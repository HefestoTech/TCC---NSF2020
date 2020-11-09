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

        const irParaTelaDeVerAgendamentos = () => {
            if(responseCompleto.perfil === "Funcionário")
               history.push({
                 pathname: "/VerAgendaFunc/" + responseCompleto.idUsuario,
                 state: responseCompleto,
               });
            else {
               history.push({
                   pathname:"/consultacliente/" + responseCompleto.idUsuario,
                   state:responseCompleto
            });
            }
        }

        const irParaTelaDeAgendarNovaConsulta = () => {
            if(responseCompleto.perfil === "Funcionário")
              history.push({
                pathname: "/agendafunc/" + responseCompleto.idUsuario,
                state: responseCompleto,
              });

            else {
                history.push({
                    pathname:"/agendarconsultacliente/" + responseCompleto.idUsuario,
                    state:responseCompleto
                });
            }  
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
                    <button onClick={irParaTelaDeVerAgendamentos} type="button" class="btn_1 btn btn-outline-danger">Meus Agendamentos</button>
                   
                    
                    <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" class="btn_1 btn btn-outline-danger">Novo Agendamento</button>
                   
                    </div>
                    </div>

                </div>
            
            
        </div>
         <Rodape/>
        </>
     )
 }


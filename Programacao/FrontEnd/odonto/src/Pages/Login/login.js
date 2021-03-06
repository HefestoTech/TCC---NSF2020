import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import OdontoApi from '../../Services/OdontoApi';
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../../Components/Loading"
import 'react-toastify/dist/ReactToastify.css';
import Rodape from '../../Components/Footer'

const api = new OdontoApi();

 export default function Login(){
    const ref = useRef(null); 

    const [mostrarSenha, setMostrarSenha] = useState("password");

    const [mostrarLoading, setMostrarLoading] = useState(false);

     const mudarMostrarSenha = () => {
         if(mostrarSenha == "password")
            setMostrarSenha("text");
         else 
            setMostrarSenha("password")    
     }

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();


    const logarClick = async() => {
        try {
        
        setMostrarLoading(true)
        
        const modeloLogin = ({"email":email, "senha":senha});

        const response = await api.Logar(modeloLogin);

        setMostrarLoading(false);
        if(response.perfil == "Cliente"){
          history.push({  
            pathname:"/menu/cliente",
            state: response
          })
        }
        if(response.perfil == "Funcionário"){
          history.push({
            pathname:"/menu/funcionario",
             state:response
          })
        }

            
        } catch (e) {
            setMostrarLoading(false);
            toast.error(e.response.data.erro)
        }
    }

    const IrParaTelaDeCadastrar = () => {
            history.push({
            pathname:"/Cadastrar"
        });
    }

    return(
        <div className="ContLog">
            
        

         {mostrarLoading === true &&
            <div>
                <Loading/>
            </div>
         }

           
          <div className="logo">
                <Link to= "/"><h1>ODONTO</h1> </Link>
            </div>

          <div className= "bodyLogin back">
           
           
                <div className = "card-top">

                  <h2 className="ParteOnelogin" > Entre na sua conta! </h2> 
                  
               
                    <div className= "card">
                    <div className = "cardlogin">
                        <label >Digite seu e-mail:</label>
                        <input className="form-control" onChange={e => setEmail(e.target.value)} type="email"   placeholder =" odonto@exemplo "  required ></input>

                        <div className = "cardlogin">
                        <div className="div_senhaLogin">
                                <div className="div1_login">
                        <label >Senha:</label>
                        <input className=" form-control" onChange={e => setSenha(e.target.value)} type={mostrarSenha}  placeholder =" Digite sua senha" required ></input>
                                </div>
                                <div className="div_icon">
                        <i title="Mostrar Senha"  onClick={mudarMostrarSenha}  class="senha_icon far fa-eye-slash"></i>
                                </div>
                               
                            </div>
                        <div className = "cardlogin btn pequenoLogin">
                        <button
                        onClick={logarClick}
                        className = "btn btn-danger"> Entrar </button>
                    
                            <p className="cardnt"> Não tem uma conta?</p> 
                           
                           <button onClick = {IrParaTelaDeCadastrar} className = "btn btn-danger"> Cadastrar-se</button>
                        </div>
                    </div>
                    </div> 
                
            
                </div>

            </div>
                

          <ToastContainer/>
            </div>      

            <div className="rodap">
                <h4>Hefesto Tech, 2020 All rights reserved</h4>
            </div>
            
        </div>
        
        

    )
 }

    
 

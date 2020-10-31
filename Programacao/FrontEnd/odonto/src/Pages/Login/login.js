import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import OdontoApi from '../../Services/OdontoApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new OdontoApi();

 export default function Login(){

    const [mostrarSenha, setMostrarSenha] = useState("password");

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
        
        const modeloLogin = ({"email":email, "senha":senha});

        const response = await api.Logar(modeloLogin);

        history.push({  
            pathname:"/menu/" + response.idUsuario,
            state: response})
            
        } catch (e) {
            toast.error(e.response.data.erro)
        }
    }


    return(
        <>
        
         <div className="logo">
                <Link to= "/"><h1>Odonto</h1> </Link>
            </div>
        <div className= "bodyLogin">
           
           
                <div className = "card-top">

                  <h2 className="ParteOnelogin" > Entre na sua conta! </h2> 
                  
               
                    <div className= "card">
                    <div className = "cardlogin">
                        <label >Digite seu e-mail</label>
                        <input onChange={e => setEmail(e.target.value)} type="email"   placeholder =" odonto@exemplo "  required ></input>

                        <div className = "cardlogin">
                        <div className="div_senhaLogin">
                                <div className="div1_login">
                        <label >Senha</label>
                        <input onChange={e => setSenha(e.target.value)} type={mostrarSenha}  placeholder =" Digite sua senha" required ></input>
                                </div>
                                <div className="div_icon">
                        <i onClick={mudarMostrarSenha} class="senha_icon far fa-eye-slash"></i>
                                </div>
                               
                            </div>
                        <div className = "cardlogin btn pequenoLogin">
                        <button
                        onClick={logarClick}
                        className = "btn btn-danger"> Entrar </button>
                    
                            <p className="cardnt"> Não tem uma conta?</p> 
                           
                            <Link className="linkCadastrar" to="/cadastrar"><button className = "btn btn-danger"> Cadastrar-se</button></Link>
                        </div>
                    </div>
                    </div> 
                
            
                </div>

            </div>
                

          <ToastContainer/>
        </div>
        </>
    )
 }

    
 

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import OdontoApi from '../../Services/OdontoApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new OdontoApi();

 export default function Login(){

    const [loginResponse, setLoginResponse] = useState({
        "idLogin": 0,
        "idUsuario" : 0,
        "nomeUsuario" : "",
        "perfil" : ""
    });

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();


    const logarClick = async() => {
        try {
        
        const modeloLogin = ({"email":email, "senha":senha});

        const response = await api.Logar(modeloLogin);

        setLoginResponse(response);

        history.push({  
            pathname:" " + response.idUsuario,
            state: loginResponse})
            
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
                        <label >Senha</label>
                        <input onChange={e => setSenha(e.target.value)} type = "password"  placeholder =" Digite sua senha" required ></input>

                        <div className = "cardlogin btn pequenoLogin">
                        <button
                        onClick={logarClick}
                        className = "btn btn-outline-danger"> Entrar </button>
                    
                            <p className="cardnt"> Não tem uma conta?</p> 
                           
                            <Link className="linkCadastrar" to="/cadastrar"><button className = "btn btn-outline-danger"> Cadastrar-se</button></Link>
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

    
 

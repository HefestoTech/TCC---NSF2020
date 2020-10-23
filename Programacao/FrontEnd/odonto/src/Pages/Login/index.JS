import React from 'react';
import './login.css';

 export default function Login(){

    return(
        <div className= "bodyLogin">
            <div>
                <h1 class="logo">Odonto</h1>
            </div>
            <form class = "form" action = "">
                <div class = "card-top">

                  <h2 class="ParteOnelogin" > Entre na sua conta! </h2> 
                  
                <div>
                    <div class= "card">
                    <div class = "cardlogin">
                        <label >Digite seu e-mail</label>
                        <input type = "email" name = "E-mail" placeholder =" adonto@exemplo" required ></input>

                        <div class = "cardlogin">
                        <label >Senha</label>
                        <input type = "password" name = "senha" placeholder =" Digite sua senha" required ></input>

                        <div class = "cardlogin btn ">
                        <button class = "btn btn-outline-danger"> Entrar </button>
                    
                            <p className = "cardnt"> Não tem uma conta ?</p> 
                           
                        <button class = "btn btn-outline-danger"> Cadastrar-se </button>
                        </div>
                    </div>
                    </div> 
                 </div>
            
                </div>

            </div>
                

            </form>
        </div>
    )
 }

    
 

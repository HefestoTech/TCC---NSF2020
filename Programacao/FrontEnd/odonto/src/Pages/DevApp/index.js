import React from 'react'
import './App.css'
import IphoneApp from '../../Assets/Fotos/Iphone11.png'
import { Link } from 'react-router-dom'

export default function DevApp(){
    return(
        <>
        <div className="divStarApp">
            <div class="divTwoMil"> 
                 <Link class="ttt" to = '/'><h1>Odonto</h1></Link>
             <Link to='/'><i class="fas fa-tooth"></i></Link>
            </div>

            <div className="textApp">

                <h2 className="textH2app">
                    Sobre o App :
                </h2>

                <p className="pApp">
                Bem vindo ao nosso App odonto!
O odonto App trás para você qualidade, facilidade e confronto ao fazer suas consultas!
O App permite que você faça agendamentos e conferir os horários de suas consultas de maneira prática e fácil sem que você saia do seu conforto!
                </p>

            </div>

            <div className="Iphonneee">
            <img className="iphone" src={IphoneApp}/>
            
            </div>
            <p className="aapp">
                Para mais informações entre em contato pelo e-mail : hefestotech@gmail.com
            </p>
          
                
        </div>
          <div class="rodapésobre">
          <p className="rodapezinnn">
          © Hefesto Tech, 2020 All rights reserved
          </p>
          </div>
          </>
    )
}
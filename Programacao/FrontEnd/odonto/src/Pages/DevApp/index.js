import React from 'react'
import './App.css'
import IphoneApp from '../../Assets/Fotos/fotoIphone.png'
import { Link } from 'react-router-dom'

export default function DevApp(){
    return(
        
        <div className="divStarApp">
            <div class="divTwoMil"> 
                 <Link class="ttt" to = '/'><h1>Odonto</h1></Link>
             <Link to='/'><i class="fas fa-tooth"></i></Link>
            </div>

            <div>
            <img className="iphone" src={IphoneApp}/>
            </div>
            <div class="rodapésobre">
                <p className="rodapezinnn">
                © Hefesto Tech, 2020 All rights reserved
                </p>
                </div>
                
        </div>
    )
}
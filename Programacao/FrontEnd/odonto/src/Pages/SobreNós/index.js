import React from 'react'
import { Link } from 'react-router-dom'
import './sobre.css'


export default function SobreNos() {
    return(
        
        <div class="fundoMil">
            <div class="divTwoMil"> 
                 <Link class="ttt" to = '/'><h1>Odonto</h1></Link>
             <Link to='/'><i class="fas fa-tooth"></i></Link>
            </div>
            
            <div class="theerMil">

                <h2 class="titulosobre">Sobre Nós</h2>
                <p> Oi essa é nossa empresa :)  </p>


            </div>
        </div>
        
          
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './dev.css'
import Instagram from '../../Assets/Fotos/Instagram.svg'
import TT from '../../Assets//Fotos/ttlogo.svg'
import Facebook from '../../Assets/Fotos/facelogo.svg'
import GitHub from '../../Assets/Fotos/github.png'
export default function SobreDev() {
    return(
        <div class="fundodev">
            <div class="devOne"> 
            <Link to= '/' ><h1 class="hOne"> <i class="fab fa-hire-a-helper"></i>efesto Tech Developers </h1></Link>

            <div class="RedesDev">
            
            <div class="faceOne">
            <a href=" https://www.facebook.com/Hefesto-Tech-103795028212808"> <img src = {Facebook}/></a>
                </div>
                
                <div class="ttOne">
                    <a href="https://www.instagram.com/hefesto.tec/"><img src ={TT}/> </a>
                </div>
                
                <div class="rOne">
                   <a href=""><img src = {Instagram}/></a>
                </div>

                <div class="GbOne">
                    <a href="https://github.com/HefestoTech"><img src={GitHub}></img></a>
                </div>

            </div>

            </div>

            
            <div class="devTheer">
                
                <h2 className="htwodev"> Sobre </h2>
                <p></p>


        </div>
    </div>
    )
}


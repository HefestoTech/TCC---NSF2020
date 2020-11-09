import React from 'react'
import { Link } from 'react-router-dom'
import './dev.css'

export default function SobreDev() {
    return(
        <div class="fundodev">
            <div class="devOne"> 
            <Link to= '/' ><h1 class="hOne"> <i class="fab fa-hire-a-helper"></i>efesto Tech Developers </h1></Link>
            </div>
            
            <div class="devTheer">
                
                <h2 className="htwodev"> Sobre </h2>
                <p></p>

            </div>

            
        </div>
    )
}
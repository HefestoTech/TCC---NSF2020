import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import User from "../../Assets/Fotos/user.svg"
import Logout from "../../Assets/Fotos/logout.svg"
import LogoD from "../../Assets/Fotos/logod.png"

export default function Menu(props){
    

    return(
        <div>
            <div className="HeadMC">    
                <div className="LogoMC"> <img src={LogoD} /><h1>Odonto</h1></div>
                <div className="User"> <img src={User} /> <h5>Olá {props.nome}</h5> </div>
                <div className="Logout"><Link to="/"><img src={Logout} /></Link></div>
                {props.children}
            </div>

        </div>
    )
}


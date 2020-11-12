import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import User from "../../Assets/Fotos/user.svg"
import Logout from "../../Assets/Fotos/logout.svg"

export default function Menu(props){

    return(
        <div>
            <div className="HeadMC">
                <div className="LogoMC"><h1>Odonto</h1></div>
                <div className="User"> <img src={User} /> <h5>Seja bem-vindo</h5> </div>
                <div className="Logout"><Link to="/"><img src={Logout} /></Link></div>
                {props.children}
            </div>

        </div>
    )
}


import React from 'react'
import './index.css'
import User from '../../Assets/user.png'
import { Link } from 'react-router-dom'

export default function Menu(props){

    return(
        <div>
            <div className="headre">
                <Link to="/"> <h1 className="logoname">Odonto</h1> </Link>
                <h3 className="text3">Seu sorriso fica muito mais lindo perto de nós, Dentistas, cuidando dele!</h3>
                {props.children}
            </div>
        </div>
    )
}


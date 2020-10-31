import React from 'react'
import './index.css'
import User from '../../Assets/user.png'
import { Link } from 'react-router-dom'

export default function Menu(props){

    return(
        <div>
            <div className="headre">
                <Link to="/"> <h1 className="logoname">Odonto</h1> </Link>
                {props.children}
            </div>
        </div>
    )
}


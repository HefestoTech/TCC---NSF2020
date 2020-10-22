
import React from 'react'
import { Link } from 'react-router-dom'
import './remarcar.css'
import User from '../../Assets/user.png'

export default function Remarcar(){

    return(
        <div className="Contre">

            <div className="headre">
                <Link to="/"> <h1 className="logoname">Odonto</h1> </Link>
                <h3 className="text3">Seu sorriso fica muito mais lindo perto de nós, Dentistas, cuidando dele!</h3>

                <div className="user">
                    <img src={User} />
                </div>
            </div>

            <div className="bodyre">
                <div className="boxre">
                    <h3 className="titlere">Remarque sua Consulta</h3>
                    <div className="infore">
                        <label><h5>Escolha uma nova Data</h5></label>
                        <input className="date" type="date" />
                        
                        <label className="chosehour"><h5>Escolha uma hora</h5></label>
                        <input className="time" type="time" />
                    </div>
                    <div className="btsre">
                        <button className="btn btn-danger">Cancelar</button>
                        <button className="btn btn-success">Salvar</button>
                    </div>
                </div>
            </div>
        
            <div className="footre"><h2> Hefesto Tech, 2020 All rights reserved</h2></div>      
        
        
        </div>
    )
}
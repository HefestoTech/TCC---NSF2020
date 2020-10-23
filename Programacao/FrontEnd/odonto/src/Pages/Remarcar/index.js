
import React from 'react'
import { Link } from 'react-router-dom'
import './remarcar.css'
import Menu from '../../Components/Menu'
import Rodape from '../../Components/Footer'
import User from '../../Assets/user.png'

export default function Remarcar(){

    return(
        <div className="Contre">

            <Menu>
                <div className="user">
                        <img src={User} />
                </div>
            </Menu>
            <div className="bodyre">
                <div className="boxre">
                    <h3 className="titlere">Remarque sua Consulta</h3>
                    <div className="infore">
                        <label><h5>Escolha uma nova Data</h5></label>
                        <input className="date form-control" type="date" />
                        
                        <label className="chosehour"><h5>Escolha uma hora</h5></label>
                        <input className="time form-control" type="time" />
                    </div>
                    <div className="btsre">
                        <button className="btn btn-danger">Cancelar</button>
                        <button className="btn btn-success">Salvar</button>
                    </div>
                </div>
            </div>
           
            <Rodape/>
        
        </div>
    )
}
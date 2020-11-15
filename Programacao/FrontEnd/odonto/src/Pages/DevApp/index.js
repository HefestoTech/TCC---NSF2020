import React from 'react'
import './App.css'
import IphoneApp from '../../Assets/Fotos/fotoIphone.png'
import { Link } from 'react-router-dom'

export default function DevApp(){
    return(
        
        <div className="divStarApp">

            <h2 className="htwoApp"> So My dick is very BIG</h2>

            <img className="iphone" src={IphoneApp}/>
           
        </div>
    )
}
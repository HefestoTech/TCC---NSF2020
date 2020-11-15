import React from 'react'
import { Link } from 'react-router-dom'
import './verfeed.css'

export default function VerFeedback(){
    return(
        <div className="VerFeedOne">
                 <div className="Back999">
                     <h2 className="h2VerFeed"> Avaliação da Consulta</h2>
                     <i class=" back100 fas fa-chevron-circle-left"></i>
                 </div>
                 <div className="VerFeedTwo">
                     <div className="VerFeedTheer">
                     <i class=" starzinnn far fa-star"></i>
                     <p className="Aval">5</p>
                     </div>
                     
                     <input className="inputVer form-control">
                     </input>
                     
                 </div>
        </div>
    )
}
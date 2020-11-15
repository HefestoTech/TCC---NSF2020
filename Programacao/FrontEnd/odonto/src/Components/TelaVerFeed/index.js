import React from 'react'
import { Link } from 'react-router-dom'
import './verfeed.css'

export default function VerFeedback(){
    return(
        <div className="VerFeedOne">
                 <div className="Back999">
                     <i class=" back22 fas fa-chevron-circle-left"></i>
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
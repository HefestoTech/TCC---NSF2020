import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './verfeed.css'


export default function VerFeedback(props){
 
    return(
        <div className="completoVerFeed">
      
        <div className="VerFeedOne">
                 <div className="Back999">
                     <h2 className="h2VerFeed"> Avaliação da Consulta</h2> 
                     <i onClick="olaaaaa"  class=" back100 fas fa-chevron-circle-left"></i>
                 </div>
                 <div className="VerFeedTwo">
                     <div className="VerFeedTheer">
                     <i class=" starzinnn far fa-star"></i>
                     <p className="Aval">{props.nota}</p>
                     </div>
                     
                     <input readOnly value={props.comentario} className="inputVer form-control">
                     </input>
                     
                 </div>
        </div>
    
        </div>
    )
}
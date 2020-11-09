import React from 'react';
import ReactLoading from "react-loading"
import './index.css'

export default function Loading () {
    return(
         <div className="mostrarSpin">
                <ReactLoading type={"spin"} color={"rgb(46, 143, 223)"} height={70} width={95} />
         </div>    
    )
}
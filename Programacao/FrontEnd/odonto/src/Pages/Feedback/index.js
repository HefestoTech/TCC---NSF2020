
import React from 'react'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer'
import './feed.css';
import { Router } from 'react-router-dom';
export default function Feedback(){
    return(
        <div>
        <Menu></Menu>
           
            <div class = "margone">
                <h2>Avaliar última consulta </h2>
                        <div className="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                        </div>
                    
                        <div class="coment">
                            
                            <textarea className="comment" rows="1" cols="60" maxLength="50"></textarea>                               
                                
                        </div>
                    
                        <div class="botao">


                    </div>
            </div>
            
            <Rodape></Rodape>

    </div>
    )
}
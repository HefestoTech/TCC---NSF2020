
import React from 'react'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer'
import './feed.css';
import { Router } from 'react-router-dom';
export default function Feedback(){
    return(
        <div>
        <Menu></Menu>
           
            <div class= "divmon">
            <div class = "margOne">
                       
                       <div className="divStarFeedback">
                       <h2>Avaliar última consulta </h2>
                        <div className="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        </div>
               

                        <div class="coment">                          
                            <textarea placeholder="Deixe seu comentário (Opcional)" className="comentario form-control" rows="1" cols="60" maxLength="85"></textarea>                                                             
                        </div>
                    
                        <div class="botao">
                            <button class="btn bta1 btn-danger">Cancelar</button>
                            <button class="btn bta2 btn-success">Salvar</button>
                        </div>
            </div>
            </div>
            <Rodape></Rodape>

    </div>
    )
}

import React from 'react'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer'
import './feed.css';
import { Router } from 'react-router-dom';
export default function Feedback() {

    const mudarCorAoClicar = (posicao) => {
       const list = document.getElementsByTagName("ul")[0];
       
        
       for(let i = 4; i >= posicao; i--)
        {
          console.log(posicao);
          console.log(i);
          const x = list.getElementsByTagName("li")[i];
          const f = x.getElementsByTagName("i")[0];
          f.style.color="black"
        }
        
        for(let a = 0; a < posicao; a++)
        {
            console.log(posicao);
            console.log(a);

            const x = list.getElementsByTagName("li")[a];
            const f = x.getElementsByTagName("i")[0];
            f.style.color="rgb(199, 169, 0)"
        }     


    }


    
    return(
        <div>
        <Menu></Menu>
           
            <div class= "divmon">
            <div class = "margOne">
                       
                    <div className="divStarFeedback">
                       <h2>Avaliar última consulta </h2>
                            <div className="star">
                                <ul>
                                <li type="none"><i id="star1"  onClick={() => mudarCorAoClicar(0)} class="far fa-star"></i></li>
                                <li type="none"><i id="star2"  onClick={() => mudarCorAoClicar(1)} class="far fa-star"></i></li>
                                <li type="none"><i id="star3"  onClick={() => mudarCorAoClicar(2)} class="far fa-star"></i></li>
                                <li type="none"><i id="star4"  onClick={() => mudarCorAoClicar(3)} class="far fa-star"></i></li>
                                <li type="none"><i id="star5"  onClick={() => mudarCorAoClicar(4)} class="far fa-star"></i></li>
                                </ul>
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

import React, { useState } from 'react'
import Menu from '../../Components/Menu';
import Rodape from '../../Components/Footer'
import './feed.css';
import { Router, useHistory } from 'react-router-dom';
import OdontoApi from "../../Services/OdontoApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Components/Loading'

const api = new OdontoApi();

export default function Feedback(props) {

    const [nota, setNota] = useState(0);
    const [comentario, setComentario] = useState(null);
    const [responseCompleto] = useState(props.location.state.responseCompleto);
    const [idConsulta, setIdConsulta] = useState(props.location.state.idAgendamento);
    const [mostrarLoading, setMostrarLoading] = useState(false);


    const history = useHistory();

    const mudarCorAoClicar = (posicao, notaEstrela) => {
       const list = document.getElementsByTagName("ul")[0];  
       for(let i = 0; i <= posicao; i++)
        {
          const x = list.getElementsByTagName("li")[i];
          const f = x.getElementsByTagName("i")[0];
          f.style.color="#ffd900"
        }
        
        for(let a = 4; a > posicao; a--)
        {
            const x = list.getElementsByTagName("li")[a];
            const f = x.getElementsByTagName("i")[0];
            f.style.color="rgb(199, 169, 0)"
        }     

        setNota(notaEstrela);
    }

    const avaliarClick = async () => {
            
        setMostrarLoading(true)
        
        try {
            const request = {
                idConsulta: idConsulta,
                nota: nota,
                comentario: comentario
            };

            console.log(request);

            await api.AvaliarConsulta(request);

            setMostrarLoading(false);

            history.push({
                pathname:"/consultacliente",
                state:responseCompleto
            })
            
        } catch (e) {
            setMostrarLoading(false);
            toast.error(e.response.data.erro);
        }
            
    }

         const irParaTelaDeVerAgendamentos = () => {
               history.push({
                   pathname:"/consultacliente",
                   state:responseCompleto
            });
        }


    
    return(
        <div>
            <ToastContainer/>

            {mostrarLoading === true && 
            <div>
                <Loading/>
            </div>
            }
        <Menu></Menu>
           
            <div class= "divmon">
            <div class = "margOne">
                       
                    <div className="divStarFeedback">
                       <h2>Avaliar última consulta </h2>
                            <div className="star">
                                <ul>
                                <li type="none"><i id="star1"  onClick={() => mudarCorAoClicar(0, 1)} class="far fa-star"></i></li>
                                <li type="none"><i id="star2"  onClick={() => mudarCorAoClicar(1, 2)} class="far fa-star"></i></li>
                                <li type="none"><i id="star3"  onClick={() => mudarCorAoClicar(2, 3)} class="far fa-star"></i></li>
                                <li type="none"><i id="star4"  onClick={() => mudarCorAoClicar(3, 4)} class="far fa-star"></i></li>
                                <li type="none"><i id="star5"  onClick={() => mudarCorAoClicar(4, 5)} class="far fa-star"></i></li>
                                </ul>
                            </div>
                    </div>
               

                        <div class="coment">                          
                            <textarea onChange={e => setComentario(e.target.value)} placeholder="Deixe seu comentário (Opcional)" className="comentario form-control" rows="1" cols="60" maxLength="85"></textarea>                                                             
                        </div>
                    
                        <div class="botao">
                            <button onClick={irParaTelaDeVerAgendamentos} class="btn bta1 btn-danger">Cancelar</button>
                            
                            <button onClick={avaliarClick} class="btn bta2 btn-success">Salvar</button>
                        </div>
            </div>
            </div>
            <Rodape></Rodape>

    </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import './remarcar.css'
import Menu from '../../Components/Menu'
import Rodape from '../../Components/Footer'
import User from '../../Assets/user.png'
import OdontoApi from '../../Services/OdontoApi';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = new OdontoApi();

export default function Remarcar(props){

    const [horario, setHorario] = useState( );
    const [data, setData] = useState();
    const [idAgendamento, setIdAgendamento] = useState(null);

    const remarcarClick = async () => { 

        try {

        const modeloRemarcacao =
        {
            "IdAgendamento": idAgendamento,
            "NovoHorario": new Date(data, horario)
        }
        
        const response = api.RemarcarConsulta(modeloRemarcacao)
            
        } catch (e) {
            toast.error(e.response.data.erro);
        }
    }

    console.log(horario);
    console.log(data);

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
                        <input onChange={e => setData(e.target.value)}  className="date form-control" type="date" />
                        
                        <label className="chosehour"><h5>Escolha uma hora</h5></label>
                        <input onChange={e => setHorario(e.target.value)} className="time form-control" type="time" />
                    </div>
                    <div className="btsre">
                        <button className="btn btn-danger">Cancelar</button>
                        <button 
                        onClick={remarcarClick}
                        className="btn btn-success">Salvar</button>
                    </div>
                </div>
            </div>
           
            <Rodape/>
        
        </div>
    )
}
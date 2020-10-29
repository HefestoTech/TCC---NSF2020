
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
import Loading from '../../Components/Loading'

const api = new OdontoApi();

export default function Remarcar(props){

    const [horario, setHorario] = useState("08:00");
    const [data, setData] = useState();
    const [idAgendamento, setIdAgendamento] = useState(null);
    const [mostrarSpin, setMostrarSpin] = useState(false);
    
  
    const transformarEmDataComMinutos = () => {
      
      /* 
       const tipoDate = new Date(data);
       const dia = tipoDate.getDate();
       const mes = tipoDate.getMonth();
       const ano = tipoDate.getFullYear();
       const hora = horario.substring(0,2);
       const minuto = horario.substring(3,5)
       */
       
       const horarioEDataDaConsulta = `${data} ${horario}`;
       return horarioEDataDaConsulta;
    }
   
    const remarcarClick = async () => {  
        try {
            setMostrarSpin(true)
            
            const dataFinal = transformarEmDataComMinutos();

            const request = {
                "IdAgendamento":33,
                "NovoHorario": dataFinal
            };
           
            const resp = await api.RemarcarConsulta(request);
            
            setMostrarSpin(false)

            toast.success("Consulta remarcada com sucesso!");
            
        } catch (e) {
            setMostrarSpin(false);
            toast.error(e.response.data.erro);
        }
    }

    return(
        <div className="Contre">
            {mostrarSpin == true &&
                          <div>
                              <Loading/>
                          </div>    
            }

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
                        <input value={horario} onChange={e => setHorario(e.target.value)} className="time form-control" type="time" />
                    </div>
                    <div className="btsre">
                        <button className="btn btn-danger">Cancelar</button>
                        <button 
                        onClick={remarcarClick}
                        className="btn btn-success">Salvar</button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
            <Rodape/>
        
        </div>
    )
}
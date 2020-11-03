
import React from 'react'
import './remarcar.css'
import Menu from '../../Components/Menu'
import Rodape from '../../Components/Footer'
import OdontoApi from '../../Services/OdontoApi';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Components/Loading'
import { useHistory } from 'react-router-dom';

const api = new OdontoApi();

export default function Remarcar(props){

    const history = useHistory();
    
    const [responseCompleto, setResponseCompleto] = useState({props});
    const [horario, setHorario] = useState("08:00");
    const [data, setData] = useState("01/01/0001");
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

            console.log(resp);
            
            setMostrarSpin(false)

            toast.success("Consulta remarcada com sucesso!");
            
        } catch (e) {
            setMostrarSpin(false);
            toast.error(e.response.data.erro);
            const erro = e.response.data.errors;
            
        }
    }

    const voltarParaATelaDeAgendamento = () => {

        if(responseCompleto == "Cliente"){
        history.push({
            pathname:"/consultacliente/:id",
            state: responseCompleto
        });
    }

        else{
         history.push({
            pathname:"/consultafuncionario/:id",
            state: responseCompleto
        });
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
               
            </Menu>
           
            <div className="bodyre">
                <div className="boxre">
                   
                    <h2 className="titlere">Remarque sua Consulta</h2>
                    <div className="infore">
                        <label><h5>Escolha uma data</h5></label>
                        <input value={data} onChange={e => setData(e.target.value)}  className="date form-control" type="date" />
                    
                        <label className="chosehour"><h5>Escolha uma  hora</h5></label>
                        <input value={horario}  onChange={e => setHorario(e.target.value)} className="time form-control" type="time" />
                    </div>
                    <div className="btsre">
                        <button onClick={voltarParaATelaDeAgendamento} className="btn btn-danger">Cancelar</button>
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
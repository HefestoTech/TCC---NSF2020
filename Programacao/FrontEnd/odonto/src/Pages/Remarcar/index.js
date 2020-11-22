
import React, { useEffect } from 'react'
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
    
    const [responseCompleto, setResponseCompleto] = useState(props.location.state.responseCompleto);
    const [horario, setHorario] = useState("08:00");
    const [data, setData] = useState(null);
    const [idAgendamento, setIdAgendamento] = useState(props.location.state.idAgendamento);
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

        setMostrarSpin(true);

        if(data === null){
            setMostrarSpin(false);
            toast.error("A data é obrigatória");
        }
        else if(horario === null){
            setMostrarSpin(false);
            toast.error("A hora é obrigatória");   
        }
        else{
            const dataFinal = transformarEmDataComMinutos();

            const request = {
                "IdAgendamento":idAgendamento,
                "NovoHorario": dataFinal
            };

            console.log(request);
           
            const resp = await api.RemarcarConsulta(request);

            console.log(resp);
            
            setMostrarSpin(false)

            toast.success("Consulta remarcada com sucesso!");

              if(responseCompleto.perfil == "Cliente"){
               history.push({
               pathname:"/consultacliente",
               state: responseCompleto
               });

            }else{
              history.push({
              pathname: "/VerAgendaFunc",
              state: responseCompleto,
              });

        }
            
        }} catch (e) {
            setMostrarSpin(false);
            toast.error(e.response.data.erro);

            console.log(e.response.data.erro);
            
        }
    }

    const voltarParaATelaDeAgendamento = () => {
        
        if(responseCompleto.perfil == "Cliente"){
        history.push({
            pathname:"/consultacliente",
            state: responseCompleto
        });
    }

        else{
         history.push({
           pathname: "/VerAgendaFunc",
           state: responseCompleto,
         });
    }

    }

         const verSeLogouNoSistema = () => {
           if (responseCompleto === undefined)
             history.push({ pathname: "/login" });
         };

         useEffect(() => {
           verSeLogouNoSistema();
         }, []);



    return(
        <div className="Contre">
            {mostrarSpin == true &&
                          <div>
                              <Loading/>
                          </div>    
            }

            <Menu nome={responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}/>
           
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
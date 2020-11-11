import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TelaMenu from "../../Components/TelaMenuOne";

 export default function MenuCliente(props)
 { 
        const [responseCompleto, setResponseCompleto] = useState(props.location.state)
        
        const history = useHistory();
    
        const irParaTelaDeVerAgendamentos = () => {
              history.push({
                   pathname:"/consultacliente",
                   state:responseCompleto
            });
           
        }

        const irParaTelaDeAgendarNovaConsulta = () => {
              history.push({
                    pathname:"/agendarconsultacliente",
                    state:responseCompleto
              });
        }

       


       return (
         <TelaMenu>
           <button onClick={irParaTelaDeVerAgendamentos} type="button" className="bt1 btn btn-danger ">
             Meus Agendamentos
           </button>

           <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" className="bt1 btn btn-danger ">
             Agendar Consulta
           </button>

         </TelaMenu>
       );
 }





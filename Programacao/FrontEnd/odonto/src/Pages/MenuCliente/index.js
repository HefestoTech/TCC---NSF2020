import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TelaMenu from "../../Components/TelaMenuOne";
import User from "../../Assets/Fotos/user.svg"
import Logout from "../../Assets/Fotos/logout.svg"
import Brush from "../../Assets/Fotos/brushing-teeth.svg"
import DentistW from "../../Assets/Fotos/dentist2.svg"
import './menucli.css'

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
         <div className="ContCli">

          <div className="HeadMC">
            <div className="LogoMC"><h1>Odonto</h1></div>

            <div className="User"> <img src={User} /> <h5>Seja bem-vindo</h5> </div>

            <Link to="/"><div className="Logout"><img src={Logout} /></div></Link>


          </div>

          <div className="BodyMC">
                <div className="Tt1MC">
                  <h2>A SAÚDE COMEÇA PELA BOCA</h2>
                </div>

                <div className="lay1MC">
                  <div className="leftTriangle"> </div>
                    <div className="imgBru"><img src={Brush}/></div> 
                    <div className="Tt2MC"><h2>A Odontologia é a área da saúde que preserva e restaura o movimento mais Lindo do ser humano: O SORRISO.</h2> </div>
                </div>
                
                <div className="lay2MC">
                  <div className="Box1MC">
                    <div className="MyAgend">
                      <h4>Clique aqui para ver seus agendamentos de cada consulta!</h4>
                      <button onClick={irParaTelaDeVerAgendamentos} type="button" className="bt1MC btn btn-danger ">
                        Meus Agendamentos
                      </button>

                    </div>
                  </div>
                  
                  <div className="Box2MC">
                    <div className="imgDent">
                      <img src={DentistW} />
                      <div className="Tt3Dent">
                        <h5>Dentistas posssuem mãos mágicas que devolvem às pessoas razões para brilhar seu sorriso.</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="Box3MC">
                    <div className="MyQuery">
                    <h4>Caso não tenha um agendamento CLIQUE AQUI!!</h4>
                    <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" className="bt2MC btn btn-danger ">
                      Agendar Consulta
                    </button>
                    </div>

                  </div>
                </div>
                
          </div>

         </div>

        
       );
 }





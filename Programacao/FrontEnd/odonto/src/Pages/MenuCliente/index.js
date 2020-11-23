import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import User from "../../Assets/Fotos/user.svg"
import Logout from "../../Assets/Fotos/logout.svg"
import Brush from "../../Assets/Fotos/brushing-teeth.svg"
import TeethShield from "../../Assets/Fotos/insurance.png"
import DentistW from "../../Assets/Fotos/dentist2.svg"
import Rodape from "../../Components/Footer"
import './menucli.css'
import Menu from '../../Components/Menu';

 export default function MenuCliente(props)
 { 
        const [responseCompleto, setResponseCompleto] = useState(props.location.state)
        
        const history = useHistory();

        const verSeLogouNoSistema = () => {
          if(responseCompleto === undefined)
             history.push({pathname:"/login"})
        }
    
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

       
        useEffect(() => {
          verSeLogouNoSistema();
        }, []);

       return (
         <div className="ContCli">

         <Menu nome={responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}></Menu>

          <div className="BodyMC">
                <div className="Tt1MC">
                  <h2 class="nadaaa">A SAÚDE COMEÇA PELA BOCA</h2>
                </div>

                <div className="lay1MC">
                  <div className="leftTriangle"> </div>
                    <div className="imgBru"><img src={Brush}/></div> 
                    <div className="Tt2MC"><h2>A Odontologia é a área da saúde que preserva e restaura o movimento mais Lindo do ser humano: O SORRISO.</h2> </div>
                </div>
                
                <div className="lay2MC">
                  <div className="Box1MC">
                    <div className="MyAgend">
                    <div className="Teethimg"><img src={TeethShield} /></div>
                      <h4>Clique aqui para ver seus agendamentos!</h4>
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
                    <div className="Teethimg"><img src={TeethShield} /></div>
                    <h4>Clique aqui para fazer um novo agendamento!</h4>
                    <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" className="bt2MC btn btn-danger ">
                      Agendar Consulta
                    </button>
                    </div>

                  </div>
                </div>
                
          </div>

          <Rodape></Rodape>

         </div>

        
       );
 }





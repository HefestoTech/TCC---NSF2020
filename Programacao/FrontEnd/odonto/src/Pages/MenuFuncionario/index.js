import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Menu from '../../Components/Menu'
import Rodape from '../../Components/Footer';
import Brush from '../../Assets/Fotos/brushing-teeth.svg';
import TeethShield from '../../Assets/Fotos/insurance.png';
import Report from '../../Assets/Fotos/report.png';
import './menufunc.css';

export default function MenuFuncionario(props) {

  const [responseCompleto, setResponseCompleto] = useState(props.location.state);

  const history = useHistory();
  

  const irParaTelaDeVerAgendamentos = () => {
      history.push({
        pathname: "/VerAgendaFunc",
        state: responseCompleto,
      });
  };

  const irParaTelaDeAgendarNovaConsulta = () => {
      history.push({
        pathname: "/agendafunc",
        state: responseCompleto,
      });
  };

  const irParaTelaDeVerRelatorios = () => {
      history.push({
          pathname: "/relatorio",
          state: responseCompleto
      });

  }

 
  return (
    <div className="ContFunc">
      <Menu></Menu>

          <div className="BodyMF">
                <div className="Tt1MF">
                  <h2 class="nadaaa">A SAÚDE COMEÇA PELA BOCA</h2>
                </div>
                
                <div className="lay2MF">
                  <div className="Box1MF">
                    <div className="MyAgendF">
                    <div className="Teethimg"><img src={TeethShield} /></div>
                      <h4>Clique aqui para ver todos os agendamentos de cada cliente!</h4>
                      <button onClick={irParaTelaDeVerAgendamentos} type="button" className="bt1MF btn btn-danger ">
                        Ver Agendamentos
                      </button>

                    </div>
                  </div>
                  
                  <div className="Box2MF">
                    <div className="MyReports">
                      <div className="ReportsImg"><img src={Report} /></div>
                      <h4>Clique aqui para acessar os relatórios.</h4>
                      <button onClick={irParaTelaDeVerRelatorios} type="button" className="bt2MF btn btn-danger ">
                          Ver Relatórios
                      </button>
                    </div>
                  </div>
                  
                  <div className="Box3MF">
                    <div className="MyQueryF">
                      <div className="Teethimg"><img src={TeethShield} /></div>
                        <h4>Clique aqui para agendar uma nova consulta!</h4>
                        <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" className="bt3MF btn btn-danger ">
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

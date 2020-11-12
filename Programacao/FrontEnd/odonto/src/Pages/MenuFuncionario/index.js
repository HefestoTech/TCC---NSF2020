import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TelaMenu from "../../Components/TelaMenuOne";

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
    <TelaMenu>
      <button onClick={irParaTelaDeVerAgendamentos} type="button" class=" btnss btn btn-danger">
        Ver Agendamentos
      </button>

      <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" class="btnss btn btn-danger">
        Agendar Consulta
      </button>

       <button onClick={irParaTelaDeVerRelatorios} type="button" class=" btnss btn btn-danger">
        Ver Relatórios
      </button>
    </TelaMenu>
  );
}

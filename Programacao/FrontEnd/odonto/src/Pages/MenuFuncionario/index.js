import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TelaMenu from "../../Components/TelaMenuOne";

export default function MenuFuncionario(props) {

  const [responseCompleto, setResponseCompleto] = useState(props.location.state);

  const history = useHistory();
  

  const irParaTelaDeVerAgendamentos = () => {
      history.push({
        pathname: "/VerAgendaFunc/" + responseCompleto.idUsuario,
        state: responseCompleto,
      });
  };

  const irParaTelaDeAgendarNovaConsulta = () => {
      history.push({
        pathname: "/agendafunc/" + responseCompleto.idUsuario,
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
      <button onClick={irParaTelaDeVerAgendamentos} type="button" class="btn_1 btn btn-outline-danger">
        Ver Agendamentos
      </button>

      <button onClick={irParaTelaDeAgendarNovaConsulta} type="button" class="btn_1 btn btn-outline-danger">
        Agendar Consulta
      </button>

       <button onClick={irParaTelaDeVerRelatorios} type="button" class="btn_1 btn btn-outline-danger">
        Ver Relatórios
      </button>
    </TelaMenu>
  );
}

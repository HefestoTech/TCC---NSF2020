import React, { useEffect, useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import OdontoApi from "../../../Services/OdontoApi";
import Loading from "../../../Components/Loading";

const api = new OdontoApi();

export default function TopServicos (props) {

    const [topServicos, setTopServicos] = useState([]);
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [mostrarLoading, setMostrarLoading] = useState(false);


     const pegarTopServicos = async () => {
       try {

         setMostrarLoading(true);

         const resp = await api.TopServicos();

         console.log(resp);

         setTopServicos(resp);

         setMostrarLoading(false);


       } catch (e) {

        setMostrarLoading(false)

        setTopServicos([]);
       }
     };

      const verSeLogouNoSistema = () => {
        if (responseCompleto === undefined) 
            history.push({ pathname: "/login" });
    };


    const chamarFuncoes = () => {
        verSeLogouNoSistema();
        pegarTopServicos();
    }
        
    const history = useHistory();
     useEffect(() => {
       chamarFuncoes();
     }, []);

    return (
      <>
      {mostrarLoading === true && 
      <div>
        <Loading/>
      </div>
      }
        
        <Menu nome={responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}/>
       
        <div className="boryCompletoRelatorio">
          <div className="voltarRelatorio">
            <p>
              <Link
                to={{
                  pathname: "/relatorio",
                  state: responseCompleto,
                }}
              >
                 <i class=" back22 fas fa-chevron-circle-left"></i>
              </Link>
            </p>
          </div>

          <div className="tituloRelatoriVerPorDia">
            <h1>Relatório</h1>

            <h4>Ver Top 10 Serviços</h4>
          </div>

          {topServicos.length !== 0 && (
            <table class="table tabelaRelatorio servicosTable">
              <thead>
                <tr>
                  <th scope="col">Servico</th>
                  <th scope="col">QtdConsultas</th>
                  <th scope="col">Total Gasto</th>
                </tr>
              </thead>

              <tbody>
                {topServicos.map((x) => (
                  <tr>
                    <th scope="row">{x.nome}</th>
                    <td>{x.qtdConsultas}</td>
                    <td>{"R$" + x.totalGasto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <Footer />
      </>
    );
}
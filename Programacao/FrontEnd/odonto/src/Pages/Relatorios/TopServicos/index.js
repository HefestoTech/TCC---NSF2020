import React, { useEffect, useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css";
import { Link } from "react-router-dom";
import OdontoApi from "../../../Services/OdontoApi";

const api = new OdontoApi();

export default function TopServicos (props) {

    const [topServicos, setTopServicos] = useState([]);
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);

     const pegarTopServicos = async () => {
       try {
         const resp = await api.TopServicos();

         console.log(resp);

         setTopServicos(resp);
       } catch (e) {

         setTopServicos([]);
       }
     };

     useEffect(() => {
       pegarTopServicos();
     }, []);

    return (
      <>
        <Menu />
        <div className="boryCompletoRelatorio">
          <div className="voltarRelatorio">
            <p>
              <Link to={{
                  pathname:"/relatorio",
                  state: responseCompleto
                  }}> Voltar </Link>
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
import React, { useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css"
import OdontoApi from "../../../Services/OdontoApi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"

const api = new OdontoApi()

export default function RelatorioPorDia (props) {

    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [data, setData] = useState();
    const [consultasDoDia, setConsultasDoDia] = useState([]);

    console.log(responseCompleto);

    const pegarConsultasPorDia = async (novaData) => {
            try {
                  
                  const resp = await api.PegarPorDia(novaData);
            
                  setConsultasDoDia(resp);

            } catch (e) {
                
                toast.error(e.response.data.erro)
                setConsultasDoDia([]);
                
            }
    }

    return (
      <>
        <ToastContainer />
        <Menu />
        <div className="boryCompletoRelatorio">
          <div className="voltarRelatorio">
            <p><Link to={{
                  pathname:"/relatorio",
                  state: responseCompleto
                  }} > Voltar </Link></p>
          </div>
          <div className="tituloRelatoriVerPorDia">
            <h1>Relatório</h1>

            <h4>Ver Consultas Por Dia</h4>

            <label className="labelRelatorio">
              Escolha uma data
              <input
                onChange={(e) => pegarConsultasPorDia(e.target.value)}
                type="date"
                className="form-control"
              />
            </label>
          </div>

          {consultasDoDia.length !== 0 && (
            <table class="table tabelaRelatorio">
              <thead>
                <tr>
                  <th scope="col">Dia</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Total da Consulta</th>
                  <th scope="col">Hora</th>
                </tr>
              </thead>

              <tbody>
                {consultasDoDia.map((x) => (
                  <tr>
                    <th scope="row">{x.dia}</th>
                    <td>{x.cliente}</td>
                    <td>{"R$" + x.totalVenda}</td>
                    <td>
                      {new Date(x.hora).toLocaleString().substring(11, 16)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <Footer />
      </>
    );
};
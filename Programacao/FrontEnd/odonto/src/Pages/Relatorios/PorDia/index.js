import React, { useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css"
import OdontoApi from "../../../Services/OdontoApi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = new OdontoApi()

export default function RelatorioPorDia (props) {

    const [responseCompleto, setResponseCompleto] = useState(props);
    const [data, setData] = useState();
    const [consultasDoDia, setConsultasDoDia] = useState([]);

    const pegarConsultasPorDia = async (novaData) => {
            try {
                  console.log(novaData)
                  const resp = await api.PegarPorDia(novaData);
                  console.log(resp);
                  setConsultasDoDia(resp);

            } catch (e) {
                console.log(e.response.data)
                toast.error(e.response.data.erro)
                setConsultasDoDia([]);
                
            }
    }

    return (
      <>
      <ToastContainer/>
        <Menu />
        <div className="boryCompletoRelatorio">
          <div className="tituloRelatoriVerPorDia">
            <h1>Relatório</h1>

            <h4>Ver Consultas Por Dia</h4>

            <label className="labelRelatorio">Escolha uma data <input onChange={(e) => pegarConsultasPorDia(e.target.value)} type="date" className="form-control"/></label>
          </div>

            {consultasDoDia.length !== 0 &&
            <table class="table tabelaRelatorio">
                <thead>
                    <tr>
                    <th scope="col">Dia</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Total da Venda</th>
                    <th scope="col">Hora</th>
                    </tr>
                </thead>
    
                <tbody>
                    {consultasDoDia.map((x) => (
                    <tr>
                    <th scope="row">{x.dia}</th>
                    <td>{x.cliente}</td>
                    <td>{"R$" + x.totalVenda}</td>
                    <td>{new Date(x.hora).toLocaleString().substring(11,16)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            }


        </div>

        <Footer />
      </>
    );
};
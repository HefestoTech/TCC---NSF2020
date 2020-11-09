import React, { useEffect, useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css";
import { Link } from "react-router-dom";
import OdontoApi from "../../../Services/OdontoApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = new OdontoApi();

export default function TopClientes (props) {

    const [topClientes, setTopClientes] = useState([]);
     const [responseCompleto, setResponseCompleto] = useState(props.location.state);

     const pegarTopClientes = async () => {
       try {

         const resp = await api.TopClientes();

         console.log(resp);

         setTopClientes(resp);
       } catch (e) {
         setTopClientes([]);
         console.log(e);
         toast.error(e);
       }
     };

     useEffect(() => {
       pegarTopClientes();
     }, []);

    return (
      <>
        <ToastContainer/>
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

            <h4>Ver Top 10 Clientes</h4>
          </div>

          {topClientes.length !== 0 && (
            <table class="table tabelaRelatorio ">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Qtd.Consultas</th>
                  <th scope="col">Total Gasto</th>
                </tr>
              </thead>

              <tbody>
                {topClientes.map((x) => (
                  <tr>
                    <th scope="row">{x.nome}</th>
                    <td>{x.email}</td>
                    <td>{x.telefone}</td>
                    <td>{x.qtdConsultas}</td>
                    <td>{"R$" + x.totalGastos}</td>
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
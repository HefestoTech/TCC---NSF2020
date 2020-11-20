import React, { useEffect, useState } from "react"
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import OdontoApi from "../../../Services/OdontoApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Components/Loading";

const api = new OdontoApi();

export default function TopClientes (props) {

    const [topClientes, setTopClientes] = useState([]);
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [mostrarLoading, setMostrarLoading] = useState(false);

     const pegarTopClientes = async () => {
       try {

         setMostrarLoading(true);
        
         const resp = await api.TopClientes();

         setTopClientes(resp);

         setMostrarLoading(false);

       } catch (e) {

        setMostrarLoading(false);
        
        setTopClientes([]);
        
        toast.error(e);
       }
     };

      const verSeLogouNoSistema = () => {
        if (responseCompleto === undefined)
          history.push({ pathname: "/login" });
      };

      const history = useHistory();
      
      const chamarFuncoes = () => {
        verSeLogouNoSistema();
        pegarTopClientes();
      }

      

     useEffect(() => {
       chamarFuncoes();
     }, []);

    return (
      <>
        <ToastContainer/>
        {mostrarLoading === true && 
        <div>
          <Loading/>
        </div>
        }
        <Menu />
        <div className="boryCompletoRelatorio">
          <div className="voltarRelatorio">
            <p>
              <Link to={{
                  pathname:"/relatorio",
                  state: responseCompleto
                  }}> <i class=" back22 fas fa-chevron-circle-left"></i></Link>
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
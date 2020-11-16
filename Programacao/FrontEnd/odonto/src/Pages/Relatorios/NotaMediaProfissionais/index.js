import React, { useEffect, useState } from "react";
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import OdontoApi from "../../../Services/OdontoApi"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const api = new OdontoApi();

export default function NotaMedia (props) {

    const [notaMedia, setNotaMedia] = useState([]);
    const [responseCompleto, setResponseCompleto] = useState(props.location.state)

    const notaMediaDosFuncionario = async () => 
    {
        try {

            const resp = await api.NotaMedia();

            console.log(resp)

            setNotaMedia(resp);
            
        } catch (e) {

            toast.error(e.response.data.erro);
            
        }
    }

     useEffect(() => {
       notaMediaDosFuncionario();
     }, []);

    return(
        <>
        <ToastContainer/>
        <Menu/>
         <div className="boryCompletoRelatorio">
          <div className="voltarRelatorio">
            <p><Link to={{
                  pathname:"/relatorio",
                  state: responseCompleto
                  }} >  <i class=" back22 fas fa-chevron-circle-left"></i> </Link></p>
          </div>
          <div className="tituloRelatoriVerPorDia">
            <h1>Relatório</h1>

            <h4>Nota Media dos Funcionários</h4>

          </div>

        
            <table class="table tabelaRelatorio">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Qtd.Consultas</th>
                  <th scope="col">Nota Media</th>
                </tr>
              </thead>

              <tbody>
                {notaMedia.map((x) => (
                  <tr>
                    <th scope="row">{x.nome}</th>
                    <td>{x.qtdConsultas}</td>
                    <td>{x.notaMedia.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      
        </div>

        <Footer/>

        </>

    )
}
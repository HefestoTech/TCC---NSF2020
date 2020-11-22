import React, { useEffect, useState } from "react";
import "./styles.css";
import Menu from "../../../Components/Menu"
import Footer from "../../../Components/Footer"
import OdontoApi from "../../../Services/OdontoApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import Chart from "react-google-charts"
import Loading from "../../../Components/Loading"

const api = new OdontoApi();

export default function PorMes(props) {

    const [mesInicio, setMesInicio] = useState(1);
    const [mesFinal, setMesFinal] = useState(1)
    const [consultaDosMeses, setConsultaDosMeses] = useState([]);
    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    const [mostrarLoading, setMostrarLoading] = useState(false);

    const pegarConsultasPorMeses = async () => {
      try {

        setMostrarLoading(true);
      
        const resp = await api.PegarPorMeses(mesInicio,mesFinal);
        
        setConsultaDosMeses(resp);

        setMostrarLoading(false)

      } catch (e) {

        setMostrarLoading(false);

        setConsultaDosMeses([]);

        toast.error(e.response.data.erro);
      }
    };
    
    const history = useHistory();

        const verSeLogouNoSistema = () => {
          if (responseCompleto === undefined)
            history.push({ pathname: "/login" });
        };

        useEffect(() => {
          verSeLogouNoSistema();
        }, []);

    return (
      <>
        <ToastContainer />
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

            <h4>Ver Saldo por Meses</h4>
          </div>

          <div className="InputsRelatoriosPorMes">
            <label className="labelRelatorio">
              Escolha um mês inicial
              <select
                onChange={(e) => setMesInicio(Number(e.target.value))}
                className="form-control"
              >
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>
            </label>

            
            <label className="labelRelatorio">
              Escolha um mês final
              <select
                onChange={(e) => setMesFinal(Number(e.target.value))}
                type="number"
                className="form-control"
              >
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
              </select>
            </label>
            
              <div className="botãoPorMes">
                  <button onClick={pegarConsultasPorMeses} type="button" className="btn btn-outline-info btn_agendadosFunc">
                    <i className="iconSearch fas fa-search" />
                  </button>
              </div>
            
            
          </div>

          
          {consultaDosMeses.length !== 0 && 
          <div className="graficoPorMeses">
          <Chart
            width={"700px"}
            height={"400px"}
            chartType="Bar"
            loader={<div>Carregando Grafico</div>}
            rows={consultaDosMeses.map((x) => (
              [String(x.mes), x.qtdVendas, x.totalVenda]
            ))}

            columns={["Mês", "Qtd.Consultas", "Total Ganho"]}
           
            options={{
              // Material design options
              chart: {
                title: "Desempenho Mensal",
                subtitle: "Consultas em 2020",
              },
            }}
            // For tests
            rootProps={{ "data-testid": "2" }}
          />
          </div>
          }

          

         
        </div>

        <Footer />
      </>
    );
}
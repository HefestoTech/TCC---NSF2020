import React, { useState } from 'react';
import Menu from '../../../Components/Menu'
import Footer from '../../../Components/Footer'
import './styles.css'
import { Link } from 'react-router-dom';

export default function HomeRelatorio (props) {

    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    
    console.log(responseCompleto)
    
    
    return (
      <>
        <Menu />
        <div className="containerHomeRelatorio">
    
          <div className="voltarRelatorio homeRelatarioVoltar">
            <p>
              <Link to={{
                  pathname:"/menu/funcionario",
                  state: responseCompleto
                  }} >
                Voltar
             </Link>
            </p>
          </div>

          <h2>
            Olá, {responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}. Bem vindo a tela de relatórios.
            <br />
            Abaixo você pode escolher qual relatório deseja fazer:
          </h2>

          <ul className="listaDeRelatorios">
            <li>
              <Link to={{pathname: "/PorDia", state: responseCompleto}}>Consultar Consultas por Dia</Link>
            </li>
            <li>
              <Link to={{pathname:"/PorMes", state:responseCompleto}}>Consultar Saldo por Mês</Link>
            </li>
            <li>
              <Link to={{pathname:"/TopClientes", state:responseCompleto}}>Consultar Top 10 Clientes</Link>
            </li>
            <li>
              <Link to={{pathname:"/TopServicos", state: responseCompleto}}>Consultar Top 10 Serviços</Link>
            </li>
            <li>
              <Link to={{pathname:"/NotaMedia", state: responseCompleto}}>Qtd de Consultas e Nota Media de Cada Dentista.</Link>
            </li>
          </ul>
        </div>
       
        <Footer />
      </>
    );
}
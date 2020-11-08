import React, { useState } from 'react';
import Menu from '../../../Components/Menu'
import Footer from '../../../Components/Footer'
import './styles.css'
import { Link } from 'react-router-dom';

export default function HomeRelatorio (props) {

    const [responseCompleto, setResponseCompleto] = useState(props);
    
    return (
      <>
        <Menu />
        <div className="containerHomeRelatorio">
          <h2>
            Olá, nome. Bem vindo a tela de relatórios.
            <br />
            Abaixo você pode escolher qual relatório deseja fazer:
          </h2>

          <ul className="listaDeRelatorios">
            <li>
              <Link to="PorDia">Consultar Consultas por Dia</Link>
            </li>
            <li>
                <Link to="emObras">Consultar Consultas por Mês</Link>
            </li>
            <li>
                <Link to="emObras">Consultar Top 10 Clientes</Link>
            </li>
            <li>
                <Link to="emObras">Consultar Top 10 Serviços</Link>
            </li>
            <li>
                <Link to="emObras">Ainda vamos pensar</Link>
            </li>
          </ul>
        </div>
        <Footer />
      </>
    );
}
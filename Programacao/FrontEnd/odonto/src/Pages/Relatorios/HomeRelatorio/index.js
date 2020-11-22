import React, { useEffect, useState } from 'react';
import Menu from '../../../Components/Menu'
import Footer from '../../../Components/Footer'
import './styles.css'
import { Link, useHistory } from 'react-router-dom';

export default function HomeRelatorio (props) {

    const [responseCompleto, setResponseCompleto] = useState(props.location.state);
    
    
     const verSeLogouNoSistema = () => {
        if (responseCompleto === undefined) 
           history.push({ pathname: "/login" });
      };

    const history = useHistory();  

    useEffect(() => {
      verSeLogouNoSistema();
    }, []);
    
    
    return (
      <>
        <Menu nome={responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}/>
        
        <div className="containerHomeRelatorio">
    
          <div className="homeRelatarioVoltar voltarRelatorio">
            <p>
              <Link to={{
                  pathname:"/menu/funcionario",
                  state: responseCompleto
                  }} >
                 <i class=" back22 fas fa-chevron-circle-left"></i>
             </Link>
            </p>
          </div>

          <h2 className="h2HomeRela">
            Olá, {responseCompleto.nome.substr(0, responseCompleto.nome.indexOf(" "))}. Bem vindo a tela de relatórios.
            <br />
            Abaixo você pode escolher qual relatório deseja fazer:
          </h2>

          <ul className="listaDeRelatorios">
            <li>
            <Link to={{pathname: "/PorDia", state: responseCompleto}}> <button type="button" class="btn btn-outline-dark  tamanhoBTN">Consultar Consultas por Dia</button></Link>
            </li>
            <li>
            <Link to={{pathname:"/PorMes", state:responseCompleto}}> <button type="button" class="btn btn-outline-dark  tamanhoBTN">Consultar Saldo por Mês</button></Link>
            </li>
            <li>
            <Link to={{pathname:"/TopClientes", state:responseCompleto}}> <button type="button" class="btn btn-outline-dark  tamanhoBTN">Consultar Top 10 Clientes</button></Link>
            </li>
            <li>
            <Link to={{pathname:"/TopServicos", state: responseCompleto}}>  <button type="button" class="btn btn-outline-dark  tamanhoBTN">Consultar Top 10 Serviços</button></Link>
            </li>
            <li>
            <Link to={{pathname:"/NotaMedia", state: responseCompleto}}>   <button type="button" class="btn btn-outline-dark  tamanhoBTNone">Qtd de Consultas e Nota Media de Cada Dentista. </button></Link>
            </li>
          </ul>
        </div>
       
        <Footer />
      </>
    );
}
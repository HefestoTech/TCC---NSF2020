import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login/login.js'
import Remarcar from './Pages/Remarcar'
import Cadastrar from './Pages/Cadastrar'
import agendarconsultacliente from './Pages/AgendarCliente'
import MenuCliente from "./Pages/MenuCliente"
import NotFound from "./Pages/NotFound"
import Feedback from "./Pages/Feedback"
import ConsultarCliente from './Pages/ConsultaCliente'
import Privacidade from './Pages/Priv/index.js'
import TermoDeUso from './Pages/Term/index.js'
import SobreNos from './Pages/SobreNós/index.js'
import RelatorioPorDia from './Pages/Relatorios/PorDia';
import HomeRelatorio from './Pages/Relatorios/HomeRelatorio';
import PorMes from './Pages/Relatorios/PorMes';
import SobreDev from './Pages/SobreDev/index.js'
import TopClientes from './Pages/Relatorios/TopClientes';
import TopServicos from './Pages/Relatorios/TopServicos';
import VerAgendaFunc from './Pages/VerAgendaFunc/index.js';
import AgendaFunc from './Pages/AgendarFunc/index.js';
import MenuFuncionario from './Pages/MenuFuncionario';
import NotaMedia from './Pages/Relatorios/NotaMediaProfissionais';

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/remarcar" exact component={Remarcar} />
              <Route path="/cadastrar" exact component={Cadastrar} />
              <Route path="/agendarconsultacliente" exact component={agendarconsultacliente}/>
              <Route path="/menu/cliente" exact component={MenuCliente}/>
              <Route path="/menu/funcionario" exact component={MenuFuncionario} />
              <Route path="/feedback" component = {Feedback}/>
              <Route path="/consultacliente" component={ConsultarCliente} />
              <Route path="/Priv/" exact component={Privacidade} />
              <Route path="/term" exact component={TermoDeUso} />
              <Route path="/sobrenos" exact component={SobreNos} />
              <Route path="/PorDia" exact component={RelatorioPorDia} />
              <Route path="/PorMes" exact component={PorMes} />
              <Route path="/TopClientes" exact component={TopClientes} />
              <Route path="/TopServicos" exact component={TopServicos} />
              <Route path="/Relatorio" exact component={HomeRelatorio} />
              <Route path="/NotaMedia" exact component={NotaMedia} />
              <Route path="/Sobredev" exact component={SobreDev} />
              <Route path="/VerAgendaFunc" exact component={VerAgendaFunc} />
              <Route path="/agendafunc" exact component={AgendaFunc} />
              <Route path="*" component={NotFound}/>
             
          </Switch>
        </BrowserRouter>
    )
}
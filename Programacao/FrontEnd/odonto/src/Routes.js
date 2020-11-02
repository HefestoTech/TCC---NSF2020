import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login/login.js'
import Remarcar from './Pages/Remarcar'
import Cadastrar from './Pages/Cadastrar'
import agendarconsultacliente from './Pages/AgendarCliente'
import Menu from "./Pages/OneMenu"
import NotFound from "./Pages/NotFound"
import Feedback from "./Pages/Feedback"
import ConsultarCliente from './Pages/ConsultaCliente'

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/remarcar/:id" exact component={Remarcar} />
              <Route path="/cadastrar" exact component={Cadastrar} />
              <Route path="/agendarconsultacliente/:id" exact component={agendarconsultacliente}/>
              <Route path="/menu/:id" exact component={Menu}/>
              <Route path="/feedback/:id" component = {Feedback}/>
              <Route path="/consultacliente/:id" component={ConsultarCliente} />
              <Route path="*" component={NotFound}/>
              
          </Switch>
        </BrowserRouter>
    )
}
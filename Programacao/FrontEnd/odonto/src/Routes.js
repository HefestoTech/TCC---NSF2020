import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login/login.js'
import Remarcar from './Pages/Remarcar'
import Cadastrar from './Pages/Cadastrar'
import agendarconsultacliente from './Pages/AgendarCliente'
import Menu from "./Pages/OneMenu"


export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/remarcar" exact component={Remarcar} />
              <Route path="/cadastrar" exact component={Cadastrar} />
              <Route path="/agendarconsultacliente" exact component={agendarconsultacliente}/>
              <Route path="/menu/:id" path="/menu" exact component={Menu}/>
          </Switch>
        </BrowserRouter>
    )
}
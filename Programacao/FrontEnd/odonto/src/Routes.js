import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login'
import Remarcar from './Pages/Remarcar'
import Cadastrar from './Pages/Cadastrar'
import agendarconsultacliente from './Pages/agendarconsultacliente'
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
              <Route path="/menu/:id" exact component={Menu}/>
          </Switch>
        </BrowserRouter>
    )
}
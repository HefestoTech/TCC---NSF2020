import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './Pages/Home'
import Login from './Pages/Login'
import Remarcar from './Pages/Remarcar'
import Cadastrar from './Pages/Cadastrar'

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={App} />
              <Route path="/login" exact component={Login} />
              <Route path="/remarcar" exact component={Remarcar} />
              <Route path="/cadastrar" exact component={Cadastrar} />
          </Switch>
        </BrowserRouter>
    )
}
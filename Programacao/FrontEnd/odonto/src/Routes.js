import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './Pages/Home'
import Login from './Pages/Login'
import Remarcar from './Pages/Remarcar'

export default function Routes() {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={App} />
              <Route path="/login" component={Login} />
              <Route path="/remarcar" component={Remarcar} />
          </Switch>
        </BrowserRouter>
    )
}
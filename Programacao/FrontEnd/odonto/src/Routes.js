import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './Pages/Home'


export default function Router () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true} component={App} />
          </Switch>
        </BrowserRouter>
    )
}
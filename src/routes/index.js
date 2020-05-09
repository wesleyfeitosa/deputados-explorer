import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

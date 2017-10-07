import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import App from './App';
import About from './about-view';
import NotFound from './404-view';
import LandingView from './landing-view';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingView} />
      <Route exact path="/app" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

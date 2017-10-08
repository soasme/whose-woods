import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import About from './about-view';
import NotFound from './404-view';
import LandingView from './landing-view';
import WorkspaceManageView from './workspace-manage-view';
import Workspace from './workspace-view';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingView} />
      <Route exact path="/workspace" component={Workspace} />
      <Route path="/workspace-manage" component={WorkspaceManageView} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes;

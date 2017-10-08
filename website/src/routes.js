import React from 'react';
import { Provider  } from 'react-redux'
import { Switch, Route  } from 'react-router-dom';
import { ConnectedRouter  } from 'react-router-redux'
import store, { history } from './store';
import About from './about-view';
import NotFound from './404-view';
import LandingView from './landing-view';
import WorkspaceManageView from './workspace-manage-view';
import Workspace from './workspace-view';
import LoginView from './login-view';

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingView} />
        <Route exact path="/workspace" component={Workspace} />
        <Route path="/workspace-manage" component={WorkspaceManageView} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginView} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Routes;

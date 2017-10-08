import React from 'react';
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import {
  requestAuthorization
} from '../modules/authorization';

const LoginView = props => (
  <div className="Login App">
    <header className="App-header">
      <h1 className="App-title">Login to Whose Woods</h1>
    </header>
    <div>
      Username: <input type="text" name="username" />
    </div>
    <div>
      Password: <input type="password" name="password" />
    </div>
    <div>
      <button onClick={props.requestAuthorization}>Login</button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  isAuthorizing: state.authorization.isAuthorizing,
  userProfile: state.authorization.userProfile
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestAuthorization
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

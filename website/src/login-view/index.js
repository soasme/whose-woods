import React from 'react';
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import {
  requestAuthorization,
  provideUsername,
  providePassword,
} from '../modules/authorization';

const LoginView = props => (
  <div className="Login App">
    <header className="App-header">
      <h1 className="App-title">Login to Whose Woods</h1>
    </header>
    <div>
      Username: <input type="text" name="username"
        onChange={(e) => props.provideUsername(e.target.value)} />
    </div>
    <div>
      Password: <input type="password" name="password"
        onChange={(e) => props.providePassword(e.target.value)} />
    </div>
    <div>
      <button onClick={props.requestAuthorization}
        disabled={props.isAuthorizing}>Login</button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  isAuthorizing: state.authorization.isAuthorizing,
  credentialUsername: state.authorization.credentialUsername,
  credentialPassword: state.authorization.credentialPassword,
  userProfile: state.authorization.userProfile
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestAuthorization,
  provideUsername,
  providePassword
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

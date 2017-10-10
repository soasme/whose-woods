import React from 'react'
import { Redirect  } from 'react-router'
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import { requestAuthorization } from '../modules/authorization'
import LoginForm from './form'

const LoginView = props => {
  if (props.isAuthorized) {
    return (<Redirect to="/workspace" />);
  } else {
    return (
      <div className="Login App">
        <header className="App-header">
          <h1 className="App-title">Login to Whose Woods</h1>
        </header>
        <LoginForm onSubmit={props.requestAuthorization} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.authorization.isAuthorized,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestAuthorization,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

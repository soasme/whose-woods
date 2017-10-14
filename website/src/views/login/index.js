import React from 'react'
import { bindActionCreators  } from 'redux'
import { Redirect  } from 'react-router'
import { connect  } from 'react-redux'
import { authorize } from '../../modules/session'
import LoginForm from './form'

const LoginView = props => {
  if (props.isAuthorized) {
    return (<Redirect to="/workspace" />);
  } else {
    return (
      <div className="login-view">
        <LoginForm onSubmit={props.authorize} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.session.uid ? true : false,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  authorize,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

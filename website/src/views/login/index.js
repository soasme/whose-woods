import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { Redirect  } from 'react-router'
import { connect  } from 'react-redux'
import { authorize } from '../../modules/session'
import LoginForm from './form'

class LoginView extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.isAuthorized) {
      this.props.history.push(this.props.onLoginSuccess)
    }
  }

  render() {
    return (
      <div className="login-view">
        <LoginForm onSubmit={this.props.authorize} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.session.uid ? true : false,
  onLoginSuccess: state.site.loggedInEndpoint,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  authorize,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

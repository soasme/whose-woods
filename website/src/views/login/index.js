import React, { Component } from 'react'
import { bindActionCreators  } from 'redux'
import { connect  } from 'react-redux'
import { login } from '../../modules/session'
import LoginForm from './form'

class LoginView extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.isLoggedIn) {
      this.props.history.push(this.props.onLoginSuccess)
    }
  }

  render() {
    return (
      <div className="login-view">
        <LoginForm onSubmit={this.props.login } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn ? true : false,
  onLoginSuccess: state.site.loggedInEndpoint,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

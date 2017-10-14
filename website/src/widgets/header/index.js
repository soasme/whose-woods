import React from 'react'
import { bindActionCreators  } from 'redux'
import { Redirect  } from 'react-router'
import { connect  } from 'react-redux'

import './style.css'

export const Header = props => {
  if (!props.isAuthorized) {
    return (<Redirect to="/login" />);
  }
  return (
    <header className="header">
      <h1 className="header-title">{props.pageTitle}</h1>
    </header>
  )
}

const mapStateToProps = state => ({
  pageTitle: 'Whose Woods',
  isAuthorized: state.authorization.isAuthorized || false,
})

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

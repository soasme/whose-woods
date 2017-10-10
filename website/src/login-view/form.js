import React  from 'react';
import { connect  } from 'react-redux';
import { Field, reduxForm  } from 'redux-form'

let LoginForm = props => {
  const { error, handleSubmit  } = props
  return (
    <form onSubmit={ handleSubmit  }>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        {error && <strong>{error}</strong>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const mapStateToProps = state => ({
  error: state.authorization.error
})

const mapDispatchToProps = dispatch => ({

})

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)

LoginForm = reduxForm({
  form: 'login',
  destroyOnUnmount: false
})(LoginForm)

export default LoginForm

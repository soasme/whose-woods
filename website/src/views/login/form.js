import React  from 'react';
import { connect  } from 'react-redux';
import { Field, reduxForm  } from 'redux-form'

export const LoginForm = props => {
  const { error, handleSubmit, submitting  } = props
  return (
    <form onSubmit={ handleSubmit  }>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        {error && <strong>{error}</strong>}
      </div>
      <button type="submit" disabled={submitting}>Log In</button>
    </form>
  )
}

const mapStateToProps = state => ({
  error: state.authorization.error
})

const mapDispatchToProps = dispatch => ({

})


export default reduxForm({
  form: 'login',
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LoginForm)
)

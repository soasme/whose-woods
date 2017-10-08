export const AUTH_UNAUTHORIZED = '/authorization/unauthorized';
export const AUTH_CRED_USERNAME_PROVIDED = '/authorization/cred_username_provided';
export const AUTH_CRED_PASSWORD_PROVIDED = '/authorization/cred_password_provided';
export const AUTH_SUBMITTED = '/authorization/submitted';
export const AUTH_VERIFYING = '/authorization/verifying';
export const AUTH_AUTHORIZED = '/authorization/authorized';
export const AUTH_ERROR = '/authorization/error';

const initialState = {
  error: '',
  isAuthorizing: false,
  isAuthorized: false,
  credentialUsername: '',
  credentialPassword: '',
  userProfile: {
    id: 0
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUBMITTED:
      return {
        ...state,
        isAuthorizing: true
      }
    case AUTH_CRED_USERNAME_PROVIDED:
      return {
        ...state,
        credentialUsername: action.data
      }
    case AUTH_CRED_PASSWORD_PROVIDED:
      return {
        ...state,
        credentialPassword: action.data
      }
    case AUTH_AUTHORIZED:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: true,
        userProfile: action.data
      }
    case AUTH_ERROR:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: false,
        error: action.data.message
      }
    default:
      return state
  }
}

export const requestAuthorization = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: AUTH_SUBMITTED
    })

    try {
      const res = await fetch('http://127.0.0.1:3001/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().authorization.credentialUsername,
          password: getState().authorization.credentialPassword,
        })
      })
      if (res.status === 400) {
        dispatch({
          type: AUTH_ERROR,
          data: {
            message: `Wrong username or password.`
          }
        })
      } else if (res.status > 400) {
        dispatch({
          type: AUTH_ERROR,
          data: {
            message: "Something went wrong. :("
          }
        })
      } else {
        const data = await res.json()
        localStorage.setItem('token', data.token)
        dispatch({
          type: AUTH_AUTHORIZED,
          data: data
        })
      }
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        data: {
          message: e.toString()
        }
      })
    }
  }
}

export const provideUsername = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH_CRED_USERNAME_PROVIDED,
      data: data
    })
  }
}

export const providePassword = (data) => {
  return dispatch => {
    dispatch({
      type: AUTH_CRED_PASSWORD_PROVIDED,
      data: data
    })
  }
}

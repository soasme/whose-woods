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
    default:
      return state
  }
}

export const requestAuthorization = () => {
  return dispatch => {
    dispatch({
      type: AUTH_SUBMITTED
    })
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

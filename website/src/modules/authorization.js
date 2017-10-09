export const AUTH_CRED_USERNAME_PROVIDED = '/authorization/cred_username_provided'
export const AUTH_CRED_PASSWORD_PROVIDED = '/authorization/cred_password_provided'
export const AUTH_SUBMITTED = '/authorization/submitted'
export const AUTH_AUTHORIZED = '/authorization/authorized'
export const AUTH_ERROR = '/authorization/error'

export const LOADING_PROFILE = '/authorization/profile/load/doing'
export const LOADED_PROFILE = '/authorization/profile/load/done'
export const LOAD_ERROR = '/authorization/profile/load/failure'

const initialState = {
  error: '',
  isAuthorizing: false,
  isAuthorized: false,
  credentialUsername: '',
  credentialPassword: '',
  isLoadingProfile: false,
  isLoadedProfile: false,
  loadProfileError: '',
  userProfile: {
    id: 0,
    username: ''
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
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
    case AUTH_SUBMITTED:
      return {
        ...state,
        isAuthorizing: true
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
    case LOADING_PROFILE:
      return {
        ...state,
        isLoadingProfile: true,
        isLoadedProfile: false,
      }
    case LOADED_PROFILE:
      return {
        ...state,
        isAuthorizing: false,
        isAuthorized: true,
        isLoadingProfile: false,
        isLoadedProfile: true,
        userProfile: action.data
      }
    case LOAD_ERROR:
      return {
        ...state,
        isLoadingProfile: false,
        isLoadedProfile: false,
        loadProfileError: action.data.message
      }
    default:
      return state
  }
}

export const requestProfile = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOADING_PROFILE
    })

    const token = localStorage.getItem('token') || ''

    try {
      const res = await fetch('http://127.0.0.1:3001/profile', {
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
      })

      if (res.status >= 400) {
        dispatch({
          type: LOAD_ERROR,
          data: {
            message: 'Unsuccessful request.',
            status: res.status
          }
        })
        return
      }

      try {
        const data = await res.json()
        dispatch({
          type: LOADED_PROFILE,
          data: data
        })
      } catch (error) {
        dispatch({
          type: LOAD_ERROR,
          data: {
            message: "Bad Data"
          }
        })
      }
    } catch (error) {
      dispatch({
        type: LOAD_ERROR,
        data: {
          message: error.toString()
        }
      })

    }

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

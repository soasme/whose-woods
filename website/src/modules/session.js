export const SESSION = 'session'
export const LOGIN_LOADED = 'LOGIN_LOADED'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_ABORTED = 'LOGIN_ABORTED'
export const AUTHORIZE_LOADED = 'AUTHORIZE_LOADED'
export const AUTHORIZE_LOADING = 'AUTHORIZE_LOADING'
export const AUTHORIZE_ABORTED = 'AUTHORIZE_ABORTED'
export const SESSION_LOADED = 'SESSION_LOADED'
export const SESSION_PERSISTED = 'SESSION_PERSISTED'
export const SESSION_REVOKED = 'SESSION_REVOKED'

export const initialState = {
  token: null,
  isAuthorized: false,
  isLoggedIn: false,
  error: '',
}

// load token from localStorage
export const loadSession = () => {
  return {
    type: SESSION_LOADED,
    data: {
      token: window.localStorage.getItem(SESSION) || ''
    }
  }
}

// logged in
export const persistSession = ({ token }) => {
  window.localStorage.setItem(SESSION, token)
  return {
    type: SESSION_PERSISTED,
    data: {
      token: token
    }
  }
}

// logout
export const revokeSession = () => {
  window.localStorage.removeItem(SESSION)
  return {
    type: SESSION_REVOKED,
    data: {token: ''},
  }
}

export const login = ({ username, password }) => {
  return dispatch => {
    const on200 = (res) => {
      return res.json().then((data) => {
        dispatch(persistSession(data))
      })
    }
    const payload = {
      type: '$http',
      data: {
        meta: {
          type: 'LOGIN'
        },
        data: {
          url: '/login',
          opts: {
            method: 'POST',
            body: JSON.stringify({username, password})
          },
          hooks: {
            on200
          }
        }
      }
    }

    dispatch(payload)
  }
}

// validate token
export const authorize = () => {
  const session = window.localStorage.getItem('session') || ''
  return {
    type: '$http',
    data: {
      meta: {
        type: 'AUTHORIZE'
      },
      data: {
        url: '/profile',
        opts: {
          headers: {'Authorization': `Bearer ${session}`}
        },
      }
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case LOGIN_ABORTED:
      return {
        ...state,
        isLoggedIn: false
      }
    case LOGIN_LOADED:
      return {
        ...state,
        isLoggedIn: true
      }
    case AUTHORIZE_ABORTED:
    case AUTHORIZE_LOADED:
      return {
        ...state,
        isAuthorized: false
      }
    case AUTHORIZE_LOADED:
      return {
        ...state,
        isAuthorized: true
      }
    case SESSION_LOADED:
    case SESSION_PERSISTED:
    case SESSION_REVOKED:
      return {
        ...state,
        token: action.data.token,
      }
    default:
      return state
  }
}

export const SESSION_LOADING = '/session/loading'
export const SESSION_LOADED = '/session/loaded'

export const initialState = {
  uid: 0,
  authStatus: 'unknown',
  token: null,
}

// load token from localStorage
export const loadSession = () => {
  const session = window.localStorage.getItem('session') || ''
  return {
    type: SESSION_LOADING,
    data: {
      token: session
    }
  }
}

// logged in
export const persistSession = () => {
}

// logout
export const revokeSession = () => {
}


// validate token
export const authorize = () => {
  return async (dispatch, getState) => {
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SESSION_LOADING:
      return {
        ...state,
        token: action.data.token,
      }
    default:
      return state
  }
}

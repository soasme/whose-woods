export const AUTH_UNAUTHORIZED = '/authorization/unauthorized';
export const AUTH_SUBMITTED = '/authorization/submitted';
export const AUTH_VERIFYING = '/authorization/verifying';
export const AUTH_AUTHORIZED = '/authorization/authorized';
export const AUTH_ERROR = '/authorization/error';

const initialState = {
  isAuthorizing: false,
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

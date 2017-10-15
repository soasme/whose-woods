// FIXME
export const AUTHORIZE_LOADED = 'AUTHORIZE_LOADED'
export const AUTHORIZE_LOADING = 'AUTHORIZE_LOADING'
export const AUTHORIZE_ABORTED = 'AUTHORIZE_ABORTED'

const initialState = {
  profile: {
    status: 'unknown',
    error: null,
    entity: {},
  },
  records: {
    entities: {},
    errors: {},
    statuses: {},
  },
  workspaces: {
    entities: {},
    errors: {},
    statuses: {},
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_LOADED:
      return {
        ...state,
        profile: {
          status: 'loaded',
          error: null,
          entity: data
        }
      }
    default:
      return state
  }
}

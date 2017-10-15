const CONFIG = {
  suffix: ['LOADING', 'LOADED', 'ABORT'],
  respType: 'json',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}


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
    default:
      return state
  }
}

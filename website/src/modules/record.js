export const RC_FETCHLIST_LOADING = '/record/fetchList/loading'
export const RC_FETCHLIST_LOADED = '/record/fetchList/loaded'

const initState = {
  entities: [],
  fetchStatus: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case RC_FETCHLIST_LOADED:
      return {
        ...state,
        entities: action.data
      }
    default:
      return state
  }
}

export const fetchRecords = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://127.0.0.1:3001/records", {
      headers: {
        'Authorization': `Bearer ${getState().authorization.token}`
      }
    })
    const data = await res.json()
    dispatch({
      type: RC_FETCHLIST_LOADED,
      data: data
    })
  }
}

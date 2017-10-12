export const RC_FETCHLIST_LOADING = '/record/fetchList/loading'
export const RC_FETCHLIST_LOADED = '/record/fetchList/loaded'
export const RC_RECORD_ADDING = '/record/adding'
export const RC_RECORD_ADDED = '/record/added'
export const RC_RECORD_UPDATED = '/record/updated'

const initState = {
  fetchStatus: 'loading',
  entities: [],
  isAdding: false,
  isAdded: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case RC_FETCHLIST_LOADING:
      return {
        ...state,
        fetchStatus: 'doing',
      }
    case RC_FETCHLIST_LOADED:
      return {
        ...state,
        fetchStatus: 'done',
        entities: action.data
      }
    case RC_RECORD_ADDING:
      return {
        ...state,
        isAdding: true,
        isAdded: false,
      }
    case RC_RECORD_ADDED:
      return {
        ...state,
        isAdding: false,
        isAdded: true,
        fetchStatus: 'waiting',
      }
    case RC_RECORD_UPDATED:
      return {
        ...state,
        fetchStatus: 'waiting',
      }
    default:
      return state
  }
}

export const fetchRecords = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: RC_FETCHLIST_LOADING,
    })
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

export const addRecord = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: RC_RECORD_ADDING
    })
    const res = await fetch("http://127.0.0.1:3001/records", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getState().authorization.token}`
      },
      body: JSON.stringify({workspace_id: 1, content: '', created_at: parseInt(Date.now() / 1000, 10)})
    })
    const data = await res.json()
    dispatch({
      type: RC_RECORD_ADDED,
      data: data
    })
  }
}

export const updateRecord = (id, values) => {
  return async (dispatch, getState) => {
    const content = values.content
    console.log(id, content)
    const res = await fetch(`http://127.0.0.1:3001/records/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getState().authorization.token}`
      },
      body: JSON.stringify({content: content})
    })
    const data = await res.json()
    dispatch({
      type: RC_RECORD_UPDATED,
      date: data
    })
  }
}

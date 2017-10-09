import { combineReducers  } from 'redux'
import { routerReducer  } from 'react-router-redux'
import authorization from './authorization'
import workspace from './workspace'

export default combineReducers({
  router: routerReducer,
  authorization,
  workspace
})

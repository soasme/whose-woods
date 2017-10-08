import { combineReducers  } from 'redux'
import { routerReducer  } from 'react-router-redux'
import authorization from './authorization';

export default combineReducers({
  router: routerReducer,
  authorization
})

import { combineReducers  } from 'redux'
import { routerReducer  } from 'react-router-redux'
import { reducer as formReducer  } from 'redux-form'
import authorization from './authorization'
import workspace from './workspace'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  authorization,
  workspace
})

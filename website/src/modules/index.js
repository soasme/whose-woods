import { combineReducers  } from 'redux'
import { routerReducer  } from 'react-router-redux'
import { reducer as formReducer  } from 'redux-form'
import authorization from './authorization'
import workspace from './workspace'
import record from './record'
import session from './session'
import site from './site'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  authorization,
  record,
  workspace,
  session,
  site,
})

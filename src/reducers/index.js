import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import testReducer from './testReducer'

const reducers = combineReducers({
  test: testReducer,
  router: routerReducer
})

export default reducers

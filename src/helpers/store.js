import { combineReducers, applyMiddleware, createStore } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import * as thunk from 'redux-thunk'
import apiMiddleware from '../components/middleware/api'
import * as reducers from '../store/reducers/reducers'

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function buildStore() {
  const rootReducer = combineReducers(reducers)
  const routerHistoryMiddleware = routerMiddleware(browserHistory)

  return applyMiddleware(thunk.default, apiMiddleware, routerHistoryMiddleware)(createStore)(rootReducer)
}

import { fromJS, Map } from 'immutable'
import { createReducer } from '../../../helpers/store'

const initialState = fromJS({
  user: {}
})

export const accountReducer = createReducer(initialState, {

})
import { combineReducers } from 'redux';
import { transactions } from './reducers'

const reducers = combineReducers({
  transactions,
})

export default reducers
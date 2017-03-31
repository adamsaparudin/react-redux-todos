import { combineReducers } from 'redux'

import TodoReducers from './TodoReducers'

const rootReducer = combineReducers({
  Todos: TodoReducers
})

export default rootReducer

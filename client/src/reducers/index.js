import { combineReducers } from 'redux'

import TodoTextInput from './TodoTextInput'
import TodoReducers from './TodoReducers'

const rootReducer = combineReducers({
  Todos: TodoReducers,
  TodoInput: TodoTextInput
})

export default rootReducer

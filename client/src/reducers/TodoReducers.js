import update from 'immutability-helper';
import * as ActionTypes from '../constants/ActionTypes'

export default (state=[], action) => {
  switch (action.type) {
    case ActionTypes.CREATE_TODO:
      return update(state, {$push: [action.payload]})

    case ActionTypes.READ_TODO:
      return action.payload

    case ActionTypes.DELETE_TODO:
      return update(state, {$splice: [[action.index, 1]]})

    case ActionTypes.COMPLETE_TODO:
      return update(state, {[action.index]: {completed: {$set: action.status}}})

    case ActionTypes.EDIT_TODO:
      return update(state, {[action.index]: {title: {$set: action.todo}}})

    case ActionTypes.CLEAR_COMPLETED:
      return state.filter( todo => ( todo.completed === "false" ))

    case ActionTypes.COMPLETE_ALL:
      const newState = state.map( todo => {
        todo.completed = "true"
        return todo
      })
      return newState

    case ActionTypes.SORT_TODO:
      return action.payload

    default:
      return state
  }
}

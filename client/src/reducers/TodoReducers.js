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
      return update(state, {[action.index]: {completed: {$set: "true"}}})
    default:
      return state
  }
}

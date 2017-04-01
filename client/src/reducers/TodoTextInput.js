import * as ActionTypes from '../constants/ActionTypes'

export default (state='', action) => {
  switch (action.type) {
    case ActionTypes.TODO_INPUT:
      return action.text
    default:
      return state
  }
}

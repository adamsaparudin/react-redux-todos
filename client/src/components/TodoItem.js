import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteTodoAPI, completeTodoAPI } from '../actions'

const TodoItem = (props) => (
  <li className={props.todo.completed === "true" ? "completed" : ''}>
      <input
        defaultChecked={props.todo.completed === "false" ? false : true}
        onChange={() => props.onChangeEditCheck(props.todo.id, props.index)}
        className="toggle"
        type="checkbox" />
      <label
        onDoubleClick={() => props.handleEditButton(props.index)}>
        {props.todo.title}</label>
      <button onClick={() => props.deleteTodoAPI(props.todo.id, props.index)} className="destroy"></button>
  </li>
)

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ deleteTodoAPI, completeTodoAPI }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoItem)

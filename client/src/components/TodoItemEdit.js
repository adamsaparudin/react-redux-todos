import React from 'react'

const TodoItemEdit = (props) => (
  <li>
    <form onSubmit={(e) => props.editSubmitForm(e) }>
      <input autoFocus onChange={(e) => props.onChangeEditInput(e) } value={props.editTodo} />
    </form>
  </li>
)

export default TodoItemEdit

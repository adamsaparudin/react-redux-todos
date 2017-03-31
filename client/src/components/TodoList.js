import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { readTodoAPI, deleteTodoAPI, completeTodoAPI } from '../actions'

class TodoList extends React.Component {

  componentDidMount() {
    this.props.readTodoAPI()
  }

  clickTodos() {
    console.log("hello");
    return "Go"
  }

  render () {
    return (
      <div className="todo-list">
        <ul>
          {
            this.props.Todos.map((todo, index) => (
              <li key={todo.id}>
                <span onClick={() => this.clickTodos()}>{todo.title} </span>
                Completed : {todo.completed}
                <button onClick={() => this.props.deleteTodoAPI(todo.id, index)}>Delete</button>
                <button>Edit</button>
                {todo.completed === "false" ?
                  <button onClick={() => this.props.completeTodoAPI(todo.id, index)}>Mark Complete</button> :
                  '' }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    Todos: state.Todos
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ readTodoAPI, deleteTodoAPI, completeTodoAPI }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

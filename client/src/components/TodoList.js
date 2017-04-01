import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { readTodoAPI,
  editTodoAPI,
  deleteTodoAPI,
  completeTodoAPI,
  clearCompleteAPI,
  completeAllAPI,
  sortTodoAPI } from '../actions'
import TodoItem from './TodoItem'
import TodoItemEdit from './TodoItemEdit'

class TodoList extends React.Component {
  constructor () {
    super ()
    this.state = {
      editIndex : -1,
      editTodo : '',
      editId : -1,
      show: '',
      sortDate: 'DESC'
    }
  }

  clearComplete() {
    const completedArr = this.props.Todos.filter( todo => {
      return todo.completed === "true" ? todo.completed : null
    })
    return this.props.clearCompleteAPI(completedArr)
  }

  componentDidMount() {
    this.props.readTodoAPI()
  }

  handleEditButton (index) {
    this.setState({
      editIndex : index,
      editId: this.props.Todos[index].id,
      editTodo: this.props.Todos[index].title
    })
  }

  onChangeEditInput (e) {
    this.setState({
      editTodo: e.target.value
    })
  }

  onChangeEditCheck (id, index) {
    let status = this.props.Todos[index].completed === "false" ? "true" : "false"
    this.props.completeTodoAPI(id, index, status)
  }

  handleFilterButton (setShow) {
    this.setState({
      show: setShow
    })
  }

  editSubmitForm (e) {
    e.preventDefault()
    this.props.editTodoAPI(this.state.editIndex, this.state.editTodo, this.state.editId)
    this.setState({
      editIndex: -1,
      editTodo: '',
      editId: -1
    })
  }

  sortTodo () {
    if(this.state.sortDate === 'ASC') {
      this.setState({
        sortDate: 'DESC'
      })
    }
    else {
      this.setState({
        sortDate: 'ASC'
      })
    }
    this.props.sortTodoAPI(this.state.sortDate)
  }

  render () {
    return (
      <div>
        <ul className="todo-list">
          {
            this.props.Todos
            .filter( todo => {
              let regPattern = new RegExp(this.props.TodoInput, 'gi')
              return regPattern.test(todo.title)
            })
            .filter( todo => {
              return this.state.show === ''
              ?
                todo
              :
                this.state.show === 'completed'
                ?
                todo.completed === 'true'
                :
                todo.completed === 'false'
            })
            .map((todo, index) => (
              this.state.editIndex === index
              ?
                <TodoItemEdit key={todo.id}
                  todo={todo}
                  editTodo={this.state.editTodo}
                  editSubmitForm={this.editSubmitForm.bind(this)}
                  onChangeEditInput={this.onChangeEditInput.bind(this)} />
              :
                <TodoItem key={todo.id}
                  onChangeEditCheck={this.onChangeEditCheck.bind(this)}
                  handleEditButton={this.handleEditButton.bind(this)}
                  todo={todo}
                  index={index}
                  editIndex={this.state.editIndex}
                />
            ))
          }
        </ul>
        <footer className="footer">
          <ul className="filters">
            <li>
              <button
                className={this.state.show === '' ? 'selected' : ''}
                onClick={() => this.handleFilterButton('')}>All</button>
            </li>
            <li>
              <button
                className={this.state.show === 'uncompleted' ? 'selected' : ''}
                onClick={() => this.handleFilterButton('uncompleted')} >Active</button>
            </li>
            <li>
              <button
                className={this.state.show === 'completed' ? 'selected' : ''}
                onClick={() => this.handleFilterButton('completed')}>Completed</button>
            </li>
          </ul>

          <button onClick={() => this.clearComplete() } className="clear-completed">Clear Complete</button>
          <button onClick={() => this.props.completeAllAPI(this.props.Todos) } className="clear-completed">Complete All </button>
          <button onClick={() => this.sortTodo() } className="clear-completed">Sort By Date</button>
        </footer>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    Todos: state.Todos,
    TodoInput: state.TodoInput
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ readTodoAPI, editTodoAPI, deleteTodoAPI, completeTodoAPI, clearCompleteAPI, completeAllAPI, sortTodoAPI }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

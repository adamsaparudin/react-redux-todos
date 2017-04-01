import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createTodoAPI, changeTodoTextInput } from '../actions'

class TodoTextInput extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      todoInput: ''
    }
  }

  handleTodoInputChange (event) {
    this.setState({
      todoInput: event.target.value
    })
    this.props.changeTodoTextInput(event.target.value)
  }

  submitTodo (e) {
    e.preventDefault()
    this.props.createTodoAPI(this.state.todoInput)
    this.setState({
      todoInput: ''
    })
    this.props.changeTodoTextInput('')
  }

  render () {
    return (
      <header className="header">
        <form onSubmit={this.submitTodo.bind(this)}>
          <input
            className="new-todo"
            onChange={this.handleTodoInputChange.bind(this)}
            value={this.state.todoInput}
            placeholder="Plan work..."/>
        </form>
      </header>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ createTodoAPI, changeTodoTextInput }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoTextInput)

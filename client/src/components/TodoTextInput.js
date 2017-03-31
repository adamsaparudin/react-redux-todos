import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { createTodoAPI } from '../actions'

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
  }

  submitTodo (e) {
    e.preventDefault()
    this.props.createTodoAPI(this.state.todoInput)
    this.setState({
      todoInput: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.submitTodo.bind(this)}>
        <input
          onChange={this.handleTodoInputChange.bind(this)}
          value={this.state.todoInput}
          placeholder="Plan work..."/>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ createTodoAPI: createTodoAPI }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoTextInput)

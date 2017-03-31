import * as ActionTypes from '../constants/ActionTypes'
import axios from 'axios'

export function createTodo (todo) {
  return {
    type: ActionTypes.CREATE_TODO,
    payload: todo
  }
}

export function createTodoAPI (todo) {
  return (dispatch) => {
    axios.post('http://localhost:8080/todos', {
      title: todo,
      completed: "false",
      createdAt: new Date()
    })
    .then( response => {dispatch(createTodo(response.data))})
  }
}

export function readTodo (todo) {
  return {
    type: ActionTypes.READ_TODO,
    payload: todo
  }
}

export function readTodoAPI () {
  return (dispatch) => {
    axios.get('http://localhost:8080/todos')
    .then( response => { dispatch(readTodo(response.data)) })
  }
}

export function deleteTodo (index) {
  return {
    type: ActionTypes.DELETE_TODO,
    index
  }
}

export function deleteTodoAPI (id, index) {
  return (dispatch) => {
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then( response => { dispatch(deleteTodo(index)) })
  }
}

export function completeTodo (index) {
  return {
    type: ActionTypes.COMPLETE_TODO,
    index
  }
}

export function completeTodoAPI (id, index) {
  return (dispatch) => {
    axios.patch(`http://localhost:8080/todos/${id}`, {completed: "true"})
    .then( response => { dispatch(completeTodo(index)) })
  }
}

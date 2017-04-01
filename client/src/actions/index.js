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

export function editTodo (index, todo) {
  return {
    type: ActionTypes.EDIT_TODO,
    index,
    todo
  }
}

export function editTodoAPI (index, todo, id) {
  return (dispatch) => {
    axios.patch(`http://localhost:8080/todos/${id}`, {title: todo})
    .then( response => { dispatch(editTodo(index, todo))})
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

export function completeTodo (index, status) {
  return {
    type: ActionTypes.COMPLETE_TODO,
    index,
    status
  }
}

export function completeTodoAPI (id, index, status) {
  return (dispatch) => {
    axios.patch(`http://localhost:8080/todos/${id}`, {completed: status})
    .then( response => { dispatch(completeTodo(index, status)) })
  }
}

export function clearComplete () {
  return {
    type: ActionTypes.CLEAR_COMPLETED
  }
}

export function clearCompleteAPI (todos) {
  return (dispatch) => {
    axios.all(todos.map( todo => {
      return axios.delete(`http://localhost:8080/todos/${todo.id}`)
      .then( response => {} )
    }))
    .then( all => { dispatch(clearComplete()) })
  }
}

export function completeAll () {
  return {
    type: ActionTypes.COMPLETE_ALL
  }
}

export function completeAllAPI (todos) {
  return (dispatch) => {
    axios.all(todos.map( todo => {
      return axios.patch(`http://localhost:8080/todos/${todo.id}`, {completed: "true"})
      .then( response => {} )
    }))
    .then( all => {dispatch(completeAll()) })
  }
}

export function sortTodo (payload) {
  return {
    type: ActionTypes.SORT_TODO,
    payload
  }
}

export function sortTodoAPI (sort) {
  return (dispatch) => {
    axios.get(`http://localhost:8080/todos?_sort=createdAt&_order=${sort}`)
    .then( response => { dispatch(sortTodo(response.data)) })
  }
}

export function changeTodoTextInput (text) {
  return {
    type: ActionTypes.TODO_INPUT,
    text
  }
}

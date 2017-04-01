import React, { Component } from 'react';

import TodoTextInput from './components/TodoTextInput'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App todoapp">
        <div className="main">
          <input className="toggle-all" type="checkbox" />
  				<label htmlFor="toggle-all">Mark all as complete</label>
          <TodoTextInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

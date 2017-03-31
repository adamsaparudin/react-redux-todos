import React from 'react'
import ReactDOM from 'react-dom'
import Thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './App'
import './index.css'

const store = applyMiddleware(Thunk)(createStore)

ReactDOM.render(
  <Provider store={store(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

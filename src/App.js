import React, { Component } from 'react';

import TodoApp from 'Containers/TodoApp/TodoApp';

// Init redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoAppReducers from 'Reducers/index';


import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

let store = createStore(todoAppReducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;

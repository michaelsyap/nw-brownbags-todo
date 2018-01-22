import React, { Component } from 'react';

import TodoApp from 'Containers/TodoApp/TodoApp';

// Init redux
import { Provider } from 'react-redux';
import store from 'Stores';


import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';


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

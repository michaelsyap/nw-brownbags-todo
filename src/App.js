import React, { Component } from 'react';

import TodoApp from 'Containers/TodoApp/TodoApp';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <TodoApp />
    );
  }
}

export default App;

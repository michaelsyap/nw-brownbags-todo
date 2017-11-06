import React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from 'Containers/TodoApp/TodoApp';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <TodoApp />
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from 'Components/Header/Header';


class TodoApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="todo-app">
        <Header />
      </section>
    )
  }
}

export default TodoApp;

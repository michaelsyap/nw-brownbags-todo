import React, { Component } from 'react';
import Header from 'Components/Header/Header';
import TodoListContainer from 'Containers/TodoListContainer/TodoListContainer';
import TodoFiltersContainer from 'Containers/TodoFiltersContainer/TodoFiltersContainer';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="todo-app">
        <Header />
        <TodoListContainer />
        <TodoFiltersContainer />
      </section>
    )
  }
}

export default TodoApp;

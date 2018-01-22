import React, { Component } from 'react';
import HeaderContainer from 'Containers/HeaderContainer/HeaderContainer';
import TodoListContainer from 'Containers/TodoListContainer/TodoListContainer';
import TodoFiltersContainer from 'Containers/TodoFiltersContainer/TodoFiltersContainer';


class TodoApp extends Component {
  render() {
    return (
      <section className="todo-app">
        <HeaderContainer />
        <TodoListContainer />
        <TodoFiltersContainer />
      </section>
    )
  }
}

export default TodoApp;

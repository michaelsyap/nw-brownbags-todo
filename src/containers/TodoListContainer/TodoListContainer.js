import React, { Component } from 'react';
import TodoList from 'Components/TodoList/TodoList';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TodoList todoItems={this.props.todoItems} />
    )
  }
}

export default TodoListContainer;

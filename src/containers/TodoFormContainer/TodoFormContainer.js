import React, { Component } from 'react';
import TodoForm from 'Components/TodoForm/TodoForm';


class TodoFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TodoForm />
    )
  }
}

export default TodoFormContainer;

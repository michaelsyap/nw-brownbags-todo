import React, { Component } from 'react';
import TodoFilters from 'Components/TodoFilters/TodoFilters';


class TodoFilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TodoFilters />
    )
  }
}

export default TodoFilterContainer;
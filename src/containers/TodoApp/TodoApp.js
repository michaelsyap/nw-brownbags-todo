import React, { Component } from 'react';
import Header from 'Components/Header/Header';
import TodoListContainer from 'Containers/TodoListContainer/TodoListContainer';
import TodoFiltersContainer from 'Containers/TodoFiltersContainer/TodoFiltersContainer';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          id: 1,
          text: 'Buy fruits at the market',
          status: 'pending'
        },
        {
          id: 2,
          text: 'Call mom',
          status: 'done'
        },
        {
          id: 3,
          text: 'Finish assignment',
          status: 'pending'
        },
        {
          id: 4,
          text: 'Wash dishes',
          status: 'done'
        },
        {
          id: 5,
          text: 'Prepare food for tomorrow',
          status: 'pending'
        }
      ]
    };
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

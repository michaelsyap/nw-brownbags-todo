import React, { Component } from 'react';
import HeaderContainer from 'Containers/HeaderContainer/HeaderContainer';
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
      ],
      visibleItems: 'ALL' //all, pending, done
    };

    this.addTodo = this.addTodo.bind(this);
    // this.toggleTodoItem = this.toggleTodoItem.bind(this);
    // this.toggleVisibleItems = this.toggleVisibleItems.bind(this);
  }

  addTodo(todo) {
    let todoItems = [
      ...this.state.todoItems,
      todo
    ];
    

    console.log(todoItems);

    this.setState({ todoItems });
  }

  toggleTodoItem(todo) {

  }

  toggleVisibleItems(visibileItems) {

  }



  render() {
    return (
      <section className="todo-app">
        <HeaderContainer addTodo={this.addTodo} />
        <TodoListContainer todoItems={this.state.todoItems} />
        <TodoFiltersContainer />
      </section>
    )
  }
}

export default TodoApp;

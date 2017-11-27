import React, { Component } from 'react';
import TodoList from 'Components/TodoList/TodoList';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onEditMode: null,
      visibleItems: 'ALL', //all, pending, done
      todoItems: props.todoItems
    };

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.loadVisibleItems = this.loadVisibleItems.bind(this);
    this.handleVisibleItems = this.handleVisibleItems.bind(this);
  }

  handleToggleTodo(e) {
    let id = e.target.value;

    this.props.toggleTodoItem(id);
  }

  handleEditMode(todo) {
    let id = todo ? todo.id : null;

    console.log(id);

    this.setState({
      onEditMode: id
    });
  }

  handleDeleteTodo(todo) {
    this.props.deleteTodoItem(todo.id);
    console.log(todo);
  }

  handleVisibleItems(e) {
    const visibleItems = e.target.value;

    this.setState({
      visibleItems: visibleItems
    });

  }

  loadVisibleItems() {

    const visibleItems = this.state.visibleItems;


    if(visibleItems === 'PENDING') {
      return this.props.todoItems.filter(todo => !todo.done);
    } else if (visibleItems === 'DONE') {
      return this.props.todoItems.filter(todo => todo.done);
    } else {
      return this.props.todoItems;
    }

  }

  render() {

    const filteredVisibleItems = this.loadVisibleItems();


    return (
      <TodoList 
        todoItems={filteredVisibleItems}
        editTodoText={this.props.editTodoText}
        handleToggleTodo={this.handleToggleTodo} 
        onEditMode={this.state.onEditMode}  
        handleEditMode={this.handleEditMode}
        handleDeleteTodo={this.handleDeleteTodo}
        handleVisibleItems={this.handleVisibleItems}
        visibleItems={this.state.visibleItems}
        />
    )
  }
}

export default TodoListContainer;

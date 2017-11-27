import React, { Component } from 'react';
import TodoList from 'Components/TodoList/TodoList';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onEditMode: null
    };

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
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

  render() {
    return (
      <TodoList 
        todoItems={this.props.todoItems} 
        editTodoText={this.props.editTodoText}
        handleToggleTodo={this.handleToggleTodo} 
        onEditMode={this.state.onEditMode}  
        handleEditMode={this.handleEditMode}
        handleDeleteTodo={this.handleDeleteTodo}
        />
    )
  }
}

export default TodoListContainer;

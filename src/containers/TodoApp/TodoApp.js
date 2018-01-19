import React, { Component } from 'react';
import HeaderContainer from 'Containers/HeaderContainer/HeaderContainer';
import TodoListContainer from 'Containers/TodoListContainer/TodoListContainer';


class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        {
          id: 1,
          text: 'Buy fruits at the market',
          done: false
        },
        {
          id: 2,
          text: 'Call mom',
          done: false
        },
        {
          id: 3,
          text: 'Finish assignment',
          done: true
        },
        {
          id: 4,
          text: 'Wash dishes',
          status: false
        },
        {
          id: 5,
          text: 'Prepare food for tomorrow',
          done: false
        }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
    this.editTodoText = this.editTodoText.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
  }

  addTodo(todo) {
    let todoItems = [
      todo,
      ...this.state.todoItems
    ];
    

    console.log(todoItems);

    this.setState({ todoItems });
  }

  toggleTodoItem(id) {
    let todoIndex = this.state.todoItems.findIndex((todo) => { return todo.id === +id });
    let todoObj = this.state.todoItems[todoIndex];
    // Could also use Object.assign()
    let updatedTodo = {
      ...todoObj,
      done: !todoObj.done
    };

    let newTodoItems = [
      ...this.state.todoItems.slice(0, todoIndex),
      updatedTodo,
      ...this.state.todoItems.slice(todoIndex + 1)
    ];
    
    this.setState({
      todoItems: newTodoItems
    });
    
    console.log(newTodoItems);
  }

  editTodoText(newTodo) {
    // Returns in the index of the item being looked for in the array
    let todoIndex = this.state.todoItems.findIndex((todo) => { return todo.id === newTodo.id });

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // end - Zero-based index before which to end extraction. slice extracts up to but not including end.
    let newTodoItems = [
      ...this.state.todoItems.slice(0, todoIndex),
      newTodo,
      ...this.state.todoItems.slice(todoIndex + 1)
    ];
    
    this.setState({
      todoItems: newTodoItems
    });
    
    console.log(newTodoItems);    

  }

  deleteTodoItem(id) {
    let newTodoItems = this.state.todoItems.filter((todo) => todo.id !== id);

    this.setState({todoItems: newTodoItems});
  }


  render() {
    return (
      <section className="todo-app">
        <HeaderContainer />
        <TodoListContainer 
          todoItems={this.state.todoItems} 
          toggleTodoItem={this.toggleTodoItem}
          editTodoText={this.editTodoText}
          deleteTodoItem={this.deleteTodoItem}
           />
      </section>
    )
  }
}

export default TodoApp;

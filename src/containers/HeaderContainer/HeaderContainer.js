import React, {Component} from 'react';
import Header from 'Components/Header/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoFormOpen: false,
      todoText: ''
    };

    this.addTodoProxy = this.addTodoProxy.bind(this);
    this.openTodoForm = this.openTodoForm.bind(this);
  }

  addTodoProxy(todoItem) {
    let todo = {
      id: Date.now(),
      text: todoItem.todoText,
      done: false
    };

    this.props.addTodo(todo);
  }

  openTodoForm() {
    console.log(this.state);
    this.setState({
      todoFormOpen: !this.state.todoFormOpen
    });

  }
  

  render() {
    return (
      <Header 
        todoFormOpen={this.state.todoFormOpen} 
        openTodoForm={this.openTodoForm} 
        addTodoProxy={this.addTodoProxy} />
    )
  }
}

export default HeaderContainer;

import React, {Component} from 'react';
import Header from 'Components/Header/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoFormOpen: false
    };

    this.addTodoProxy = this.addTodoProxy.bind(this);
    this.openTodoForm = this.openTodoForm.bind(this);
  }

  addTodoProxy() {
    let todo = {
      id: Date.now(),
      text: 'Buy fruits at the market',
      status: 'pending'
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
      <Header todoFormOpen={this.state.todoFormOpen} openTodoForm={this.openTodoForm} addTodoProxy={this.addTodoProxy} />
    )
  }
}

export default HeaderContainer;

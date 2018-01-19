import React, {Component} from 'react';
import Header from 'Components/Header/Header';
import { addTodo } from 'Actions';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoFormOpen: false
    };

    this.openTodoForm = this.openTodoForm.bind(this);
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

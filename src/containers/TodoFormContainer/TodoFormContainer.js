import React, { Component } from 'react';
import TodoForm from 'Components/TodoForm/TodoForm';


class TodoFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(e) {
    
    this.setState({
      todoText: e.target.value
    });

  }

  handleSubmit(e) {
    console.log('Submitting...');
    console.log(this.state);

    this.props.addTodoProxy({
      todoText: this.state.todoText
    });

    e.target.reset();
    this.setState({
      todoText: ''
    });



    e.preventDefault();
  }

  render() {
    return (
      <TodoForm 
      isOpen={this.props.todoFormOpen} 
      handleSubmit={this.handleSubmit} 
      handleChange={this.handleChange}
      todoItem={this.state.todoItem} />
    )
  }
}

export default TodoFormContainer;

import React, { Component } from 'react';
import TodoForm from 'Components/TodoForm/TodoForm';

import { addTodo } from 'Actions';
import { connect } from 'react-redux';


class TodoFormContainerComp extends Component {
  constructor(props) {
    super(props);

    console.log(props);

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
    
    let todo = {};



    if(this.state.todoText.length > 0) {

      this.props.onAddTodo(this.state.todoText);
  
      e.target.reset();
      this.setState({
        todoText: ''
      });
  
    } else {
      alert('Please put description for your to do item.');
    }


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

const mapStateToProps = (state) => {
  return {

  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => {
      return dispatch(addTodo(text));
    }
  }
};


const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFormContainerComp);

export default TodoFormContainer;

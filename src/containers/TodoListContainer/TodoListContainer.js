import React, { Component } from 'react';
import TodoList from 'Components/TodoList/TodoList';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    todoItems: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {}
};



const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export default TodoListContainer;

import React, { Component } from 'react';
import TodoList from 'Components/TodoList/TodoList';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    todoItems: state.todos,
    todoAppUI: state.todoAppUI
  }
};


const TodoListContainer = connect(
  mapStateToProps,
  null
)(TodoList);


export default TodoListContainer;

import { ADD_TODO, TOGGLE_TODO_STATUS } from 'Actions/actionTypes';

let nextTodoId = () => {
  return Date.now();
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId(),
    text
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO_STATUS,
    id
  }
};

import { ADD_TODO } from 'Actions/actionTypes';

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

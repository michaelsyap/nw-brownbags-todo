import { 
          ADD_TODO, 
          TOGGLE_TODO_STATUS,
          TOGGLE_TODO_FORM,
          SET_ACTIVE_TODO_EDITING,
          UPDATE_TODO,
          DELETE_TODO
        } from 'Actions/actionTypes';

let nextTodoId = () => {
  return Date.now();
};

export const toggleTodoForm = () => {
  return {
    type: TOGGLE_TODO_FORM
  }
}

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


export const setActiveTodoEdit = id => {
  return {
    type: SET_ACTIVE_TODO_EDITING,
    id
  }
}

export const updateTodo = (id, text) => {
  return {
    type: UPDATE_TODO,
    id,
    text
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};

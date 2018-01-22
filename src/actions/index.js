import { 
          ADD_TODO, 
          TOGGLE_TODO_STATUS,
          TOGGLE_TODO_FORM,
          SET_ACTIVE_TODO_EDITING 
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

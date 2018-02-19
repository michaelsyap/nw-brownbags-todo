import { 
          ADD_TODO, 
          TOGGLE_TODO_STATUS,
          TOGGLE_TODO_FORM,
          SET_ACTIVE_TODO_EDITING,
          UPDATE_TODO,
          DELETE_TODO,
          SET_TODO_FILTERS,
          TODO_ITEM_CREATING
        } from 'Actions/actionTypes';


import firebase from 'Stores/firebase';

let nextTodoId = () => {
  return Date.now();
};

export const setTodoCreationLoading = () => {
  return {
    type: TODO_ITEM_CREATING
  }
};

export const toggleTodoForm = () => {
  return {
    type: TOGGLE_TODO_FORM
  }
}

export const addTodo = text => {

  return (dispatch) => {
    dispatch(setTodoCreationLoading());

    firebase.addTodo({
      id: nextTodoId(),
      done: false,
      text
    })
    .then((result) => {

      dispatch(setTodoCreationLoading());

      dispatch({
        type: ADD_TODO,
        id: nextTodoId(),
        text
      });

    });

  }

  // return 
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

export const setTodoFilter = (filter) => {
  return {
    type: SET_TODO_FILTERS,
    filter
  }
}


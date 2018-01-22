import { SET_ACTIVE_TODO_EDITING, TOGGLE_TODO_FORM, SET_TODO_FILTERS } from 'Actions/actionTypes';

const todoAppUI = (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_TODO_FORM :
      return {
        ...state,
        todoFormOpen: !state.todoFormOpen
      }
    case SET_ACTIVE_TODO_EDITING :
      return {
        ...state,
        activeEditItem: action.id
      }
    
    case SET_TODO_FILTERS :
      return {
        ...state,
        activeFilter: action.filter
      }
    default: 
      return state
  }
};


export default todoAppUI;

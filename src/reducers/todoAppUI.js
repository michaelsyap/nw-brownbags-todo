import { SET_ACTIVE_TODO_EDITING } from 'Actions/actionTypes';

const todoAppUI = (state = {}, action) => {
  switch(action.type) {
    case SET_ACTIVE_TODO_EDITING :
      return {
        ...state,
        activeEditItem: action.id
      }
    default: 
      return state
  }
};


export default todoAppUI;

import { TODO_APPUI_HYDRATE, 
        SET_ACTIVE_TODO_EDITING, 
        TOGGLE_TODO_FORM, 
        SET_TODO_FILTERS,
        TODO_ITEM_CREATING,
        TODO_ITEMS_FETCHING,
        TODO_ITEM_UPDATING } from 'Actions/actionTypes';

const todoAppUI = (state = {}, action) => {
  switch(action.type) {
    case TODO_APPUI_HYDRATE : 
      return {
        ...state,
        ...action.todoAppUI
      }
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
    case TODO_ITEM_CREATING :
      return {
        ...state,
        todoItemCreating: !state.todoItemCreating
      }
    case TODO_ITEMS_FETCHING :
      return {
        ...state,
        todoItemsFetching: !state.todoItemsFetching
      }
    case TODO_ITEM_UPDATING :
      return {
        ...state,
        todoItemUpdating: action.todoItemUpdating
      }
    default: 
      return state
  }
};


export default todoAppUI;

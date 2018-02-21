import { 
          ADD_TODO, 
          TOGGLE_TODO_STATUS,
          TOGGLE_TODO_FORM,
          SET_ACTIVE_TODO_EDITING,
          UPDATE_TODO,
          DELETE_TODO,
          SET_TODO_FILTERS,
          TODO_ITEM_CREATING,
          TODO_ITEMS_FETCHING,
          TODO_ITEMS_HYDRATE,
          TODO_APPUI_HYDRATE,
          TODO_ITEM_UPDATING
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

export const setTodoItemsFetching = () => {
  return {
    type: TODO_ITEMS_FETCHING
  }
}

export const setTodoItemUpdating = (id) => {
  return {
    type: TODO_ITEM_UPDATING,
    todoItemUpdating: id
  }
}

export const toggleTodoForm = () => {
  return {
    type: TOGGLE_TODO_FORM
  }
}

export const setTodoItems = (todos) => {
  return {
    type: TODO_ITEMS_HYDRATE,
    todos
  }
}

export const setInitUI = (conf) => {
  return {
    type: TODO_APPUI_HYDRATE,
    todoAppUI: conf
  }
}


export const fetchInitUI = () => {
  return (dispatch) => {
    firebase.fetchAppUI()
      .then(result => result.json())
      .then((result) => {
        dispatch(setInitUI(result));
      })
  }
}

export const fetchTodoItems = () => {
  
  return (dispatch) => {
    dispatch(setTodoItemsFetching());

    firebase.fetchTodoItems()
      .then(result => result.json())
      .then((result) => {

        let formattedTodos = Object.entries(result).map((value) => {
          return {
            remoteId: value[0],
            ...value[1]
          }
        })
        
        dispatch(setTodoItems(Object.values(formattedTodos)));
        
        dispatch(setTodoItemsFetching());
      });
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
    .then(result => result.json())
    .then((result) => {

      console.log(result.name);

      dispatch(setTodoCreationLoading());

      dispatch({
        type: ADD_TODO,
        id: nextTodoId(),
        remoteId: result.name,
        text
      });

    });

  }

  // return 
}

export const toggleTodo = ({id, remoteId, done}) => {

  return (dispatch) => {
    dispatch(setTodoItemUpdating(id));
    
    firebase.updateTodo(remoteId, { done: !done })
      .then((result) => {

          dispatch({
            type: TOGGLE_TODO_STATUS,
            id: id
          });

          dispatch(setTodoItemUpdating(0));
      })
  }
};


export const setActiveTodoEdit = id => {
  return {
    type: SET_ACTIVE_TODO_EDITING,
    id
  }
}

export const updateTodo = ({id, remoteId, text}) => {


  return (dispatch) => {
    dispatch(setTodoItemUpdating(id));

    dispatch({
      type: UPDATE_TODO,
      id,
      text
    });

    return firebase.updateTodo(remoteId, { text })
      .then((result) => {
        
        dispatch(setTodoItemUpdating(0));

      })
  }

  
};

export const deleteTodo = (id, remoteId) => {
  
  return (dispatch) => {
    dispatch(setTodoItemUpdating(id));
    
    firebase.deleteTodo(remoteId)
      .then((result) => result.json())
      .then((result) => {
        console.log(result);
        
        return dispatch({
          type: DELETE_TODO,
          id
        })


        dispatch(setTodoItemUpdating(0));
        
      });

  }

};

export const setTodoFilter = (filter) => {

  return (dispatch) => {
    dispatch({
      type: SET_TODO_FILTERS,
      filter
    });


    return firebase.setCurrentFilter({ activeFilter: filter })
            .then((result) => result);
  }
  

  return 
}


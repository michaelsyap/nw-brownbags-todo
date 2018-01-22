import { ADD_TODO, 
          TOGGLE_TODO_STATUS, 
          UPDATE_TODO, 
          DELETE_TODO } from 'Actions/actionTypes';


const deleteTodo = (state, id) => {
  const index = state.findIndex((todo) => {
    return todo.id === parseInt(id);
  });

  return [
    ...state.slice(0, index),
    ...state.slice(index + 1)
  ];

}

const toggleTodoItem = (state, id) => {
  console.log(state, id);
  
  const index = state.findIndex((todo) => {
    return todo.id === parseInt(id);
  });

  const todo = state[index];

  const modifiedTodo = {
    ...todo,
    done: !todo.done
  };



  return [
    ...state.slice(0, index),
    modifiedTodo,
    ...state.slice(index + 1)
  ]
}


const todos = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    case TOGGLE_TODO_STATUS:
      return toggleTodoItem(state, action.id);
    case UPDATE_TODO:
      return []
    case DELETE_TODO: 
      return deleteTodo(state, action.id)
    default:
      return state
  }
}

export default todos;

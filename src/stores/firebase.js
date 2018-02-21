import fetch from "isomorphic-fetch";

const BASE_API = 'https://nw-brownbags-todo.firebaseio.com';


const firebase = {
  fetchTodoItems: () => {
    return fetch(BASE_API + '/todos.json')
  },
  fetchAppUI: () => {
    return fetch(BASE_API + '/todoAppUI.json');
  },
  addTodo: (todo) => {

    return fetch(BASE_API + '/todos.json', {
      method: "POST",
      body: JSON.stringify(todo)
    });
  },
  updateTodo: (remoteId, keyValue) => {
    console.log(keyValue);
  
    return fetch(BASE_API + '/todos/' + remoteId + '.json', {
      method: "PATCH",
      body: JSON.stringify(keyValue)
    });
  },
  deleteTodo: (remoteId) => {
    return fetch(BASE_API + '/todos/' + remoteId + '.json', {
      method: "DELETE"
    })
  },
  setCurrentFilter: (filter) => {
    return fetch(BASE_API + '/todoAppUI.json', {
      method: "PATCH",
      body: JSON.stringify(filter)
    });
  }
};


export default firebase;

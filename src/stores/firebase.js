import fetch from "isomorphic-fetch";

const BASE_API = 'https://nw-brownbags-todo.firebaseio.com/';


const firebase = {
  getTodo: () => {

  },
  addTodo: (todo) => {

    return fetch(BASE_API + '/todos.json', {
      method: "POST",
      body: JSON.stringify(todo)
    });
  }
};


export default firebase;

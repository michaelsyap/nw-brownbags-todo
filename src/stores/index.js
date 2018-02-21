import { createStore, applyMiddleware, compose } from 'redux';

import { fetchTodoItems, fetchInitUI } from 'Actions/index';

import todoAppReducers from 'Reducers';
import thunk from 'redux-thunk';


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  thunk
];

const store = createStore(todoAppReducers, 
                          {
                            todos: [],
                            todoAppUI: {
                              activeEditItem: 0,
                              activeFilter: "PENDING",
                              todoFormOpen: false,
                              todoItemCreating: false,
                              todoItemUpdating: 0,
                              todoItemsFetching: false
                            }
                          },
                          composeEnhancers(
                            applyMiddleware(...middlewares)
                          ));


store.dispatch(fetchInitUI());
store.dispatch(fetchTodoItems());

export default store;

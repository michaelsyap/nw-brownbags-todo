import { createStore, applyMiddleware, compose } from 'redux';
import todoAppReducers from 'Reducers';
import thunk from 'redux-thunk';


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  thunk
];

const store = createStore(todoAppReducers, 
                          {
                            todos: [
                              {
                                id: 1,
                                text: 'Buy fruits at the market',
                                done: false
                              },
                              {
                                id: 2,
                                text: 'Call mom',
                                done: false
                              },
                              {
                                id: 3,
                                text: 'Finish assignment',
                                done: true
                              },
                              {
                                id: 4,
                                text: 'Wash dishes',
                                done: false
                              },
                              {
                                id: 5,
                                text: 'Prepare food for tomorrow',
                                done: false
                              }
                            ],
                            todoAppUI: {
                              activeEditItem: 0,
                              activeFilter: 'ALL', //ALL, PENDING, DONE
                              todoFormOpen: false,
                              // New todoAppUI Properties for async integration
                              todoItemCreating: false,
                              todoItemDeleting: 0,
                              todoItemUpdating: 0,
                              todoListFetching: false
                            }
                          },
                          composeEnhancers(
                            applyMiddleware(...middlewares)
                          ));


export default store;

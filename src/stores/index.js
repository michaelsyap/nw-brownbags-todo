import { createStore } from 'redux';
import todoAppReducers from 'Reducers';

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
                                status: false
                              },
                              {
                                id: 5,
                                text: 'Prepare food for tomorrow',
                                done: false
                              }
                            ],
                            todoAppUI: {
                              activeEditItem: 0
                            }
                          },
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;

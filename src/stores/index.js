import { createStore } from 'redux';
import todoAppReducers from 'Reducers';

const store = createStore(todoAppReducers, 
                          {},
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;

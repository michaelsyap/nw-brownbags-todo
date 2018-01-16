import { combineReducers } from 'redux';
import todos from './todos';

const todoAppReducers = combineReducers({
  todos
});

export default todoAppReducers;

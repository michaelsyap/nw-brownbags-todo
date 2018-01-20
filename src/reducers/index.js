import { combineReducers } from 'redux';
import todos from './todos';
import todoAppUI from './todoAppUI';

const todoAppReducers = combineReducers({
  todos,
  todoAppUI
});

export default todoAppReducers;

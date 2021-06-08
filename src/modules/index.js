import { combineReducers } from 'redux';
import todoTemplate from './TodoTemplate';
import todoList from './TodoList';

const rootReducer = combineReducers({
  todoTemplate,
  todoList
});

export default rootReducer;

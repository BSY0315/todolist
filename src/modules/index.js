import { combineReducers } from 'redux';
import todo from './Todo';
import todoList from './TodoList';

const rootReducer = combineReducers({
  todo,
  todoList
});

export default rootReducer;

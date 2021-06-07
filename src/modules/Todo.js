const INSERT = 'Todo/INSERT';
const REMOVE = 'Todo/REMOVE';

export const insert = () => ({ type: INSERT });
export const remove = () => ({ type: REMOVE });

const todos = [];

function todoReducer(state = todos, action) {
  switch (action.type) {
    case 'INSERT':
      return state.concat(action.template);
    case 'REMOVE':
      return state.filter(template => template.id !== action.id);
    default:
      return state;
  }
}

/*
const todos= [
  {
    id : 
    todoList : todoList Object 
    title : 
  }
]
*/

export default todoReducer;

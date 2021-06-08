const INSERT = 'TodoTemplate/INSERT';
const REMOVE = 'TodoTemplate/REMOVE';

let id = 1;
export const insert = (title) => ({
  type: INSERT,
  template: { id: id++, title, todoList: [] }
});
export const remove = (id) => ({ type: REMOVE, id });

const initialState = [{ id: 0, title: 'qwe', todoList: [] }];

function templateReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      return state.concat(action.template);
    case REMOVE:
      return state.filter((template) => template.id !== action.id);
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

export default templateReducer;

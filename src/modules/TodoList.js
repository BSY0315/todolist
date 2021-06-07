const INSERT = 'TodoList/INSERT';
const REMOVE = 'TodoList/REMOVE';
const CHECK = 'TodoList/CHECK';

export const insert = () => ({ type: INSERT });
export const remove = () => ({ type: REMOVE });
export const check = () => ({ type: CHECK });

let todoList = null;
// onInsert 함수에서 dispatch 호출전 반드시 호출하여 현재 todoList를 설정해줘야함
export const setRecuderItem = nowTodoList => {
  todoList = nowTodoList;
};

function todoListReducer(state = todoList, action) {
  switch (action.type) {
    case 'INSERT':
      return state.concat(action.todo);
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default todoListReducer;

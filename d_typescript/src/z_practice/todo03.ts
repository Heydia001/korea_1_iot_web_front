// todo03.ts
export const tmp = '';

interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  const newTodo: ITodoItem = {
    id: Math.max(0, ...todos.map(todo => todo.id)) + 1, 
    task: task,
    completed: false
  }
  const newTodos = [...todos, newTodo];
  return newTodos;
}

function completedTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  const changeTodo: ITodoItem[] = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  return changeTodo;
}

function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  const changeTodo = todos.filter(todo => todo.id !== id);
  return changeTodo;
}

let todos: ITodoItem[] = [];

todos = addTodo(todos, '타입스크립트 복습');
todos = addTodo(todos, '자바스크립트 복습');
todos = addTodo(todos, 'SQLD 공부');
console.log(todos);

todos = completedTodo(todos, 1);
todos = completedTodo(todos, 3);
console.log(todos);

todos = completedTodo(todos, 1);
console.log(todos);

todos = deleteTodo(todos, 1);
todos = deleteTodo(todos, 3);
todos = addTodo(todos, 'HTML/CSS 복습');
console.log(todos);
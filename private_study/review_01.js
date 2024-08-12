let todos = [];

let todo = {
  id: 1,
  content: 'sqld 공부하기',
  completed: false
}

function addTodo(content) {
  const newTodo = {
    id: todos.length + 1,
    contnent: content,
    completed: flase
  }
  return todos.push(newTodo);
}

function Toggle(id) {
  todos = todos.map((todo) => {
  if (todos.id == id){
    return {...todos, completed : !todos.completed};
  }
  return todo; 
});
}

function deleteTodo(id) {
  todos.filter((todo) => todo.id !== id);
}

function displayTodos(){
  console.log(`${todo.completed ? '아직완료 X' : '완료 O'}`);
}
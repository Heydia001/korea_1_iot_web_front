//# 1. 프로젝트 기능 정의

import { TodoManager } from "./TodoManager.js";

// todo manager를 활용
// - todoㅡmanager의 모듈의 기능을 사용하여 할 일 앱을 구현

// - 이벤트 등록, 할 일 목록 업데이트 등 로직을 담당

const todoManager = new TodoManager();

//? HTML 요소 가져오기
const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 제출 이벤트 방지

  // form 내부에서 데이터를 할 일 목록에 추가
  const text = input.value.trim();

  if (text !== '') { // 텍스트가 비워져있지 않다면
    todoManager.addTodo(text);
    input.value = '';
    updateTodolist(); // 할 일 목록 업데이트
  }
});

function updateTodolist() {
  // 모든 할 일을 가져오기
  const todos = todoManager.getTodos();
  // ul 태그 내부의 데이터 (내용)를 삭제
  // HTML요소.innerHTML
  // : 요소 내부의 전체 HTML코드를 문자열로 가져오기
  todoList.innerHTML = '';
  
  todos.forEach(todo => {
    // 태그에 사용될 텍스트 그대로를 전달
    const li = document.createElement('li');
    li.textContent = todo.text;

    if (todo.completed) {
      //순회된 요소의 완료 여부가 true 라면 
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodolist();
    });

    // 삭제 버튼 클릭시 해당 할 일 항목 제거
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
      todoManager.removeTodo(todo.id);
      updateTodolist();
    })

    li.appendChild(deleteButton)
    
    todoList.appendChild(li);
  });
}


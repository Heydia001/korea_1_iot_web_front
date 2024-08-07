//review01.js

//! TO Do List (할 일 목록 관리 시스템)
// Todo 객체

// 1. 바나나
// 2. 물 1.5L
// 3. 반품

//# todo 객체구성
// - id: 각 할일의 고유 식별자
// - content: 할일의 내용을 문자열로 저장
// - completed: 할일의 완료 상태를 나타내는 boolean 값

//? todo 객체 예시

// let todo = {
//   id : 1,
//   content : 'sqld 공부하기',
//   completed : false
// }


//# 프로젝트 구조
// 1. 할 일 추가: 객체를 사용하여 할 일을 저장하고 배열에 객체를 추가.
// >> 새로운 할 일(객체)을 할 일 목록(배열)에 추가 // push

// 2. 할 일 수정: 완료된 할 일의 completed값을 전환(토글, toggle)
// >> 할 일의 완료 상태를 변경

// 3. 할 일 삭제: 원하는 할 일을 목록에서 제거

// 4. 할 일 목록 출력: 현재 목록의 상태를 콘솔에 출력

// >> 'CRUD' 프로그램 기본기능
// Create, Read, Update, Delete

//# 프로젝트 구현

let todos = []; // 할 일 목록 저장 


//? 1. 할 일 추가
// : 고유 ID 내용, 내용, 완료를 나타내는 객체를 생성
//  >> 배열에 추가

function addTodo (content){  // 함수 호출 시 인자로 할 일의 내용을 전달 받음
  //새로운 할 일 생성
  const newTodo = {
    id : todos.length + 1, // (이번 배열의 길이) === 마지막 인덱스 번호 + 1
    content : content,
    completed : false
  }
  todos.push(newTodo);
  displayTodos();
}

//? 할 일의 완료 상태를 변경하는 함수
// : 주어진 'id'를 가진 할 일의 완료 상태를 전환(토글) 시켜줄것임
function toggleTodo(id) {
  todos = todos.map((todo) => {
    if (todo.id == id) {
      //해당 할 일의 완료 상태를 토글시키고 새로운 객체로 변환
      // >> 스프레드 연산자

      // let arr1 = [1, 2, 3];
      // let arr2 = [...arr1]; >> 배열만 가져와서 새로운 배열 생성 
      // completed: flase
      // 객체명.속성키 = 속성 값;>> 객체 속성값 재할당
      // 속성키: 새로운 속성 값; >> 새로운 내부에서 속성값 재할당 
      return {...todo, completed: !todo.completed}; //: todo는 현재 순회되는 객체(할 일) 값
    }
    return todo; //id가 일치하지 않는 데이터는 기존개체를 그대로 반환시킨다.
   });

   displayTodos();
}


//? 할 일 삭제
// : 주어진 id를 가진 할 일을 todos 배열에서 제거
// >> 배열 내부 요소의 개수 변화 o (filter)
function deleteTodo(id){
  todos.filter(todo => todo.id !== id);
  displayTodos();
}


//가지고 갈 배열만 새로 생성

//? 할 일 보여주기
function displayTodos() {
  console.log(`현재의 할 일 목록`);
  todos.forEach( todo => {
    // todo.completed 는 boolean 값
    // >> 조건 식 중 연산자를 활용하는 '삼항 연산자'
    console.log(`${todo.id}: ${todo.content} - ${todo.completed ? '완료됨' : '완료되지 않음'}`);
  })
  console.log('');
}

//# 프로젝트 실행
// displayTodos();
addTodo('sqld 공부하기');

addTodo('기술블로그 작성하기');

addTodo('자기 소개서 작성하기');

toggleTodo(1);
toggleTodo(3);

deleteTodo(3);

addTodo('자바 스크립트 공부하기')

toggleTodo(2);
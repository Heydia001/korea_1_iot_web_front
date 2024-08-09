
//!a_javascript.js

// 한 줄 주석

/*
자바스크립트 
여러 줄 주석
*/

// 자바스크립트의 확장자는 .js

// 2. js 확장자
// .js

// 3. 웹 문서에서의 JS위치
//  : 닫히는 body 태그 바로 위에 위치

// 웹 문서에서 button 이라는 선택자를 요청히여 button에 담기
// const button = document.querySelector('button');

// button 요소에 클릭(click)이벤트가 발샐=ㅇ할 경우 updateName이  실행된다.
// button.addEventListener('click', updateName);

// update에 대한 기능 정의
function updateName() {
  console.log('안녕');
  // prompt 창으로 사용자로부터 이름을 입력받기
  const name = prompt('Enter new Name');
  // 버튼의 텍스트 내용으로 입력받은 이름을 업데이트
  button.textContent = `Plyer 1: ${name}`;
  console.log(`${name}`);
}

//Javascript 개발환경 설정
// 1. 코드 작성 및 확인
// : 개발자도구 (f12, ctrl + shift + i)

// 2. 플러그인 확장 프로그램 설치
// - 코드 스니핏
// - ESLint

console.log('안녕하세요.')
// 콘솔 입력 스니펫 (clg)
console.log("안녕하세요.");

//nord 환경에서 파일 실행
// :  nord 파일명.js

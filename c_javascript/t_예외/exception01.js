//exceoption01

//! 자바스크립트 예외

//? cf) 오류
// :  부정확하거나 유효하지 않은 동작

//? 1. 오류의 공유
// 1) 구문 오류
// : 프로그램 실행 전에 발생
// 코드를 작성할 때 발생하는 오류
// 문법이 언어의 정의된 규칙을 따르지 않을 때 발생

// EX) 괄호를 닫지 않거나 잘못된 키워드 사용을 했을 경우.
console.log('구문 오류 예제');
// console.log('프로그램이 시작되었습니다.';

// 2) 'runtime' 오류
// : 프로그램 실행 중에 발생
// >> 예측 가능 한 비정상적인 조건 또는 예외적인 사건을 의미
// >> 코드가 순차적으로 실행되다가 오류가 위치하는 부분 이후에 실행이 중단된다.

// EX) file을 찾을 수 없거나 입력이 잘못 이루어진 경우, 네트워크 연결 오류 등
console.log('런타임 오류 에제');
// console.log('log를 rog로 잘못 읽었습니다');
//  : 오탈자 오류 수정 만으로도 해결이 가능한 경우가 많음
// > 그 외의 오류도 존재한다.

console.log('런타임 발생 이후의 코드');

//cf) 자바스크립트는  SynctaxError 라고 출력되는 오류
// 이외의 모든 오류가 예외 (런타임 오류로 분류)
// Ex) TypeError, ReferanceError, RangeError 등

//# JS 실행 중 발생하는 예외를 다르는 방법
// : 예외처리
//?  1. 기본 예외처리
// : 조건문을 사용해서 예외가 발생하지 않도록 지정
// (권장하지 X)

document.addEventListener('DOMContentLoaded', ()=> {
  //HTML에 존재하지 않는 요소를 불러오는 경우
  // const h1 = document.querySelector('h1');
  // h1.textContent = '안녕하세요';

  if (h1) {
    history.textContent = h1.textContent = '안녕하세요';
  } else {
    console.log('h1은 존재하지 않습니다.');
  }

  console.log('다음 로직을 실행합니다.');
})

//? 2. 예외 고급처리
// : try catch 블럭을 사용 (+finally)
// try 블록
// 블록 내에서 실행된 코드는 예외 발생여부를 감지
// >> 예외가 발생하면 즉시 실행이 중단되고 catch 블록으로 제어가 이동

// catch 블록
// : 예외가 발생햇을때 실행되는 블록
// >> catch 블록 내에 전달되는 예외 객체를 통해 오류 정보를 식별하고 처리

// finally 블록
// 예외 발생여부와 상관없이 실행되는 블록
// >> 주로 예외 자원을 정리하는 코드 (예. 파일 닫기 등)

/*
try {
  : 예외 발생 가능성이 있는 로직
  >> 일반 로직 흐름
  >> 외부의 데이터를 가져오거나 html의 요소에 접근
} catch (e, exception, error) {
  : 예외가 발생 되었을 때 실행할 코드
} finally {
  : 무조건 실행 (선택사항)
}

*/

function randomException () {
  if (Math.random() < 0.5) {
    // 50%의 확률로 조건문 실행
    throw new Error('무언가 잘못되었습니다.');
  }
  return console.log('성공적으로 실행되었습니다.');
}

try {
  const result = randomException();
  console.log(result);
  console.log('try 구문의 마지막 줄');
} catch(exception) {
  console.log('finally 구문');
}
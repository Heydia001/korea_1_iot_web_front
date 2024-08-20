// exception02.js

/*
! Error 객체

: JS 내의 모든 예외는 JS 내장 에러인 Error 객체를 상속받은 객체
- Error 객체에서 주로 사용되는 속성
: name (예외이름)
: message (예외 메시지)

? 예외 객체
: 예외가 발생하면 예외와 발생된 정보를 확인 할 수 있는객체
: 예외 생성은 
>> new Error ('에러 메세지 입력');
*/

// let myError = new error('에러를 생성합니다.');

// console.log(myError);

// cf) throw 키워드
// : 강제 발생
// : 예외나 기타 명시적인 값을 표현하는데 사용
// throw myError;
// throw '안녕하세요';
// throw 42;

//?programming 구현 중 비지니스 logic 에 따라
// 개발자가 코드의 흐름을 제어하ㅏ기위해 적절한 예외 사용을 권장

function text(object) {
  // object undifinded일 경우 또는
  // object의 속성값들이 undifinded일 경우 에러를 발생
  if (!object || object.a === undefined || object.b === undefined){
    throw new Error('함수를 호출 할 때 object와 a, b 속석이 전달 되어야 한다')
  }
  console.log(object.a + object.b);
}


try {
  text ({a: 1, b: 10});
  text ({a: '김', b: '다혜'});
  text ({});
} catch(e) {
  console.log('일반 코드 실행');
}
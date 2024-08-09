//object04.js

//! 객체의 속성 존재 여부 확인
// : 객체에 없는 속성에 접근
// >> 조건문을 활용하여 undefined 여부 확인

// 객체 생성
let object = {
  name: 'kdh',
  age: 50,
  job: 'dev'
}


//#1. 객체 내부에 해당 속성 여부 확인
if (object.name !== undefined){
  console.log('네임 속성 o');
} else {
  console.log('네임 속성 x');
}

console.log('');

// name 속성 o

//# 2. 조건문을 연산자로 간단하게 표시
// object.name
// object.hobby

// 1) 논리연산자 (and, or ,not)
// or 연산자
// >> 둘 중 하나라도 true면 true

object.name || console.log('name 속성이 X');
object.hobby || console.log('hobby 속성이 X');

!object.name || console.log('name 속성이 O');

console.log('===and 연산자===');
// 모두 true면 true
object.name && console.log('name 속성이 있습니다.');

//! 기본 속성 지정
// 삼항 연산자
// 객체의 속석ㅇ값
object.name 
=! undefined ? object.name : '이름을 알 수 없는 고객입니다.'


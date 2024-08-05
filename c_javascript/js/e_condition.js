//! e_condition.js

// 자바 스크립트 '제어'문
// : 조건문, 반복문

//# 1. 조건문 (Condition) 
//? JS 조건문 종류
// if문, else문, else if문, switch문

//! 1) if
// 가장 기본적인 조건문 중 하나
// : 특정 조건이 참일 경우 코드블록을 실행한다.

//* if문의 구조 (기본형태)
/* if (조건){
  조건이 참일 때 실행 할 코드
}; */

// >> 조건: 보통 비교연산자를 사용하여 표현

let number = 10;
if (number > 0) {
  console.log('양의 정수 입니다.');
}

let stringData = '';
let numberData = 0;

// flase데이터에 !(not) 연산를 사용여 조건문 실행

if (stringData){
  console.log('빈 문자열은 false로 인식 됩니다.');
}

if (numberData){
  console.log('0의 값은 false로 인식 됩니다.');
}

//! else문
// : if문과 함께 사용된다.
// : if문의 주어진 조건이 거짓일 때 실행할 코드블록을 정의

number = -10;

if(number > 0){
  console.log('양의 정수입니다.')
} else if (number < 0){
  console.log('음의 정수입니다.')
} else {
  console.log('0 입니다.')
};

//! else if 문
// if 와 else 사이에 여러개의 조건을 추가

//* else if 문의 구조 (기본형태) 
/*

if(조건1){
  조건이 1이 참 인경우
} else if (조건2) {
  조건 1이 거짓 && 조건 2가 참
} else if (조건3) {
  ... 
} else {
  모든 조건이 거짓일 때 실행되는 코드
}

*/

// (2) if문의 형태의 로직들은 삼항 연산자로 변환이 가능
// 조건문의 경우 코드블록의 다양한 표현이 가능
// 삼항 연산자의 경우 코드의 간결성과 {} 사용을 하지 않아 다양한 활용이 가능하다.

//? 13살 미만: 어린이
//? 13살 이상: 20살 미만: 청소년
//? 20살 이상: 성인

let age;

if (age < 13 ){
  console.log('어린이 입니다.');
} else if (age >= 13 && age < 20) {
  console.log('청소년 입니다.');
} else {
  console.log('성인 입니다.');
};

age = 15
console.log(age);

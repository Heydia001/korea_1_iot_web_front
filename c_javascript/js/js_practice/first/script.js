// let name = prompt('이름을 입력해 주세요');
// let age = prompt('나이를 입력해 주세요');

//input 창과 동일하게 prompt의 값을 문자열로 인식
//: 숫자에 대한 자료활용을 위해 형변환이 필요
// console.log('이름의 타입: ' + typeof name);
// console.log('나이의 타입: ' + typeof age);

//데이터 타입 : typeof 연산자를 통한 값은 소문자로 시작
// 형 변환: 대문자로 시작하는 타입명()
// const NUM_1 = Number(prompt('첫 번째 숫자를 입력해주세요.'));
// const NUM_2 = Number(prompt('두 번째 숫자를 입력해주세요.'));

console.log(`두 수의 합은 &{NUM_1 + NUM_2}`);

//% ======= 연산자 예제 ========
// prompt창으로 입력받는 값의 타입은 String

//! 문제 1번
const PI = 3.14;
let radius; //반지름
let area = PI * radius * radius ; //넓이

// 원의 너비값을 계산하여 출력

console.log(`원의 넓이: ${area}`);

//! 문제 2번
//  1inch = 2.54cm
// : 단위 변환기 프로그램

// : inch값을 변수에 대입하면 cm 값으로 변환하여 해당 값을 출력

let centimeter = inch * 2.54;
console.log('');

//! 문제3
let number = prompt('숫자를 입력해 주세요.');
let message = num % 2 == 1 ? '짝수' : '홀수';
console.log(message);

//! 문제 4
let total = 0;
total += 5;
total *= 3;
total -= 2;

console.log('최종결과', total);

//% == 조건문 예제 ==//
//! dbssus rPtksrl

// let randomYear;
// let  isLeapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (randomYear % 4000 === 0); 

// if (isLeapYear) {
//   console.log(`${randomYear}은 윤년입니다.`);
// } else (isLeapYear) {
//   console.log(`${randomYear}은 윤년이 아닙입니다.);
//   }

let randomYear;
let isLeapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (randomYear % 400 === 0);

randomYear = 2000;
if (isLeapYear) {
  console.log('${randomYear}은 윤년o')
} else {
  console.log('${randomYear}은 윤년x')
};

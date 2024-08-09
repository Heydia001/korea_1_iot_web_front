//object03.js

//# 4. Math 내장 객체
// : 수학과 관련된 기본 연산의 객체

// 속성: PI
console.log(Math.PI);

// 메서드
// 1) Math.random()
// : 0이상 1 미만의 난수 생성
console.log(Math.random() * 10);

// 2) Math.floor()
// : 숫자를 가장 가까운 정수로 내림
console.log(Math.floor(Math.random() * 10)); // 0부터 9까지의 정수

// 3) Math.sqrt() // squre(제곱) root(제곱근_제곱의 역전)
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(144)); //12

//# 5. Date() 객체
// : 자바스크립트에서 날짜와 시간을 관리하기위해 사용되는 내장 객체
// 현재 날짜와 시간을 반환

let now = new Date();
console.log(now);

//getDate(): 현재 '일' (1 ~ 31)
//getDay(): 현재 '요일' (0 ~ 6) 일요일: 0 , 토요일: 6

// getFullYear() : 현재 연도
// getMonth() : 현재 '월'
// >> 0부터 시작 11까지 있음

console.log(now.getMonth() + 1);

// getHours()
// getMinuites()
// getSeconds()

console.log(now.getSeconds());
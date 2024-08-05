// practice01.js

//! 문제 1
// add(함수 선언식)
// subtract (함수표현식)
// multiply (화살표함수)

// a = 10; b = 5 (매개변수와 인자값 구분)

function add (a , b){
  return a + b;
}

const subtract = function(a, b){
  return a - b;
}

const multiply = (a, b) => a * b;

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));

function calculatePay (name, hours, rate) {
if (hours > 160){
  const overTimehours = hours - 160;
  const overTimePay = overTimehours * rate *1.5;
} else if{
  const regularPay = hours * rate;
 } else {
  return reult;
}
  console.log(`${name}직원의 급여: 시급 ${result}달러 `);
}

console.log(calculatePay('A', 172, 20));
console.log(calculatePay('B', 160, 22));
console.log(calculatePay('C', 180, 18));
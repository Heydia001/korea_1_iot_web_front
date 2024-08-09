//mathModule.js

//사칙 연산음 함수를 정의
// 각 함수는 인자값 2개를 박아 연산 후 반환
// : add(더하기), substract(빼기), multiply(곱하기), divide(나누기)

export function add (x, y) {
  return x + y;
};

export default function substract (x, y) {
  return x - y;
};

export let multiply = function (x, y) {
  return x * y;
};

export let divide = (x, y) =>  {
  if (y !== 0){
    return x / y;
  } else {
    console.log('0으로 나눌 수 없습니다.');
  }
};


// JavaScript를 사용하여 세 개의 숫자를 입력받아, 각각의 숫자에 대해 다음의 연산을 수행한 후 결과를 출력하는 프로그램을 작성하세요:

// 1. 세 숫자의 합
// 2. 세 숫자의 평균
// 3. 세 숫자 중 가장 큰 값

// 입력은 `prompt`를 사용하여 받으며, 결과는 `console.log`로 출력하세요.

let  num1 = Number(prompt('세개의 숫자를 입력해 주세요. : 첫 번째 숫자'));
let  num2 = Number(prompt('세개의 숫자를 입력해 주세요. : 두 번째 숫자')); 
let  num3 = Number(prompt('세개의 숫자를 입력해 주세요. : 세 번째 숫자'));

let numbers = []; 
numbers.push(num1,num2,num3);

function result(){
  let addNum = num1 + num2 + num3;
  let findAverageOfNum = addNum / numbers.length;
  let findMax = Math.max(...numbers);

  console.log(`1. 세 숫자의 합: ${addNum} 2. 세 숫자의 평균 ${findAverageOfNum} 3. 세 숫자 중 가장 큰 값 ${findMax}`);
  }

  console.log(result(num1, num2, num3));
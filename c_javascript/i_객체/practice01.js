// practice01.js

let person = {
  name: '김다혜',
  age: 50,
  isStudent: true
} 

let fruit = ['apple', 'banana', 'orange'];
console.log([fruit[2]]);


let add = (num1, num2) => {
  return num1 + num2;
}

console.log(add(1,3));
let array = [];


for (person in array){
  console.log(array[person]);
}

//2
//* for in 반복문
//: 객체와 배열의 순회를 가볍게 처리하는 반복문 (for문의 객체 , 배열 순회 -인덱스 번호가 필요x) 
// array 배열안을 순회하면서 각 요소의 인덱스를 할다ㅏㅇ
// : 배열의 요소에 접근하기 위해서 [] 대괄호 연산자를 사용
// let array = [1, 2, 3, 4, 5];
// for (let num in array){
//   console.log(array[num]);
// }

// for (let key in Object) {
//   console.log(`$[key]: ${Object}`);
// }


// 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력

let newFruits = fruit.map(fruit => fruit.toUpperCase());
console.log(newFruits);  

// const newNumbers = numbers.map(function(value) {
//   let square = value * value;
//   return square;
// });

// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]

//? 문제 3
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성

// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용
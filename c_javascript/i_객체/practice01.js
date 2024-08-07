// practice01.js

//! 객체, 배열, 함수 복습 문제

//? 문제 1
// 1. 객체 생성
// : person 객체 생성 - name (문자열), age (숫자), isStudent (불리언) 속성을 추가


let person = { //# 객체 리터럴 방식 {} 중괄호 사용
  // 속성 (변수)
  // 키 : '값' 쌍으로 정의, 여러게의 속성은 콤마로 구분
  name: '김다혜',
  age: 28,
  isStudent: true
  }

//  객체의 속성 값에 접근
// 객체명. 속성키

// 2. 배열 사용
// : fruits 배열을 생성하고, 여러 가지 과일 이름을 문자열로 추가(3가지)
// : 두 번째 과일을 콘솔에 출력

let fruits = ['apple' , 'banana', 'orange'];
console.log(fruits[1]);

// 3. 함수 정의
// : 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수 add를 작성

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 5));

// console.log(add(num1, num2));

//? 문제 2
// 1. 객체 탐색
// : 초급에서 작성한 person 객체의 모든 속성과 값을 순회하며 콘솔에 출력하는 코드를 작성
// >> for in 반복문 사용

// cf) for in  반복문 사용 시
// : 객체의 값은 '대괄호 표기법'을 사용한다.

for (let key in person){
console.log(`${key}: ${person[key]}`)
}

//* for in 반복문
// : 객체와 배열의 순회를 가볍게 처리하는 반복문 (for문의 객체, 배열 순회 - 인덱스번호가 필요 X)

let array = [1, 2, 3, 4, 5];

// array 배열 안을(in) 순회하면서 각 요소의 인덱스를 할당
// : 배열의 요소에 접근하기 위해서 [] 대괄호 연산자를 사용
for (let num in array) {
console.log(array[num]);
}

// 객체
// let object = {};

// for (let key in object) {
// console.log(`${key}: ${object}`);
// }

// 2. 배열 메서드 사용
// : 초급에서 작성한 fruits의 모든 과일을 대문자로 변환하여 새 배열에 저장하고, 이 배열을 콘솔에 출력
// cf) 배열매서드 & 콜백함수 (함수를 인자에)

// forEach: 반환 X / 전체요소에 동일한 기능을 적용.
// map: 새로운 배열을 반환 / 전체요소에 동일한 기능을 적용.
// filter: 새로운 배열을 반환 / 해당 조건식을 참으로 통과하는 요소만 배로운 배열로 반환

let upperCaseFruits =  fruits.map(function(value, index, array){
  return value.toUpperCase();
});
console.log(upperCaseFruits);

let upperCaseFruits01 = fruits.map(value => value.toUpperCase());
// 중괄호를 없앴을때 꼭 return을 생략해주자

console.log(upperCaseFruits01);

// 3. 함수 활용
// : 두 개의 배열을 매개변수로 받아, 첫 번째 배열의 모든 요소에 두 번째 배열의 요소를 순서대로 더한 새 배열을 반환하는 함수를 작성

// [1, 2, 3]
// [4, 5, 6]
// >> [5, 7, 9]


// function combineArray (arr1, arr2) {
// return arr1.map((element, index) => element + arr2[index]);
// }
// console.log(combineArrays([1, 2, 3], [4, 5, 6]));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArray(arr1, arr2) {
  let reult = arr1.map((elements, index) => {
    return elements + arr2[index]; //동일한 번호를 가진 요소 끼리 더해져서 반환
  });
  return reult;
}

console.log(combineArray(arr1, arr2));

//? 문제 3
// 1. 객체 깊은 복사
// : person 객체를 깊은 복사하는 함수를 작성 

// JSON.stringify(객체)
// JSON.parse(JSON 데이터) //parse: 분석하다.

function deepcopy (obj){
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepcopy(person);
personCopy.name = '김도결';

console.log(personCopy);

console.log(deepcopy(person));
console.log(JSON.parse(JSON.stringify(person)));

// 2. 배열과 객체를 활용한 데이터 처리
// : 아래의 users 배열에서 성인 사용자(18세 이상)만 필터링하고, 필터링된 사용자의 이름을 새 배열로 만들어 반환하는 함수를 작성
// : 메서드 체이닝 사용

const users = [
{ name: "John", age: 25 },
{ name: "Jane", age: 17 },
{ name: "Doe", age: 18 }
];


function adultUsers(users) {
  return users.filter(user => user.age >= 18)
              .map(user => user.name);
}

console.log(adultUsers(users));
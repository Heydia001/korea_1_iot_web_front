// z_practice.js

//! 반복문 연습 예제

//? 배열의 모든 요소를 출력
// 배열명: fruits
// 배열의 길이: 3개 배열명.length
// 배열의 요소의 갯수: 3개
// 배열의 마지막 요소의 인덱스 번호: 2

// 배열의 요소에 접근: 배열명[요소 인덱스 번호]
// 배열 전체를 순회:초기화 = 0; 조건식 < 배열명.length; 증감
let fruits = ['apple', 'banana' ,'orange'];

console.log('===for문===');
for (let i = 0; i <fruits.length; i ++){
  console.log(fruits[i]);
}

console.log('==while문===');
let j = 0;
while ( j < fruits.length){
  console.log(fruits[j]);
  j ++;
}

console.log('===do-while문===');
let k = 0;
do{
  console.log(fruits[k]);
  k += 1;
} while (k < fruits.length)


//? 반복문의 베스트 프렉티스
// 반복문 식행 시 조건식에 대한 배열의 길이 측정이 단 한번만으로도 가능
// >> 배열의 길이는 루프 밖에서 한 번만 계산하는 것이 효율적
let fruitsLength = fruits.length;
for (let index = 0; index < fruitsLength; index ++){
  console.log(fruits[index]);
}
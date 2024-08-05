// array01.js

//!자바스크립트의 배열

//# 1. 배열이란?
 // : '여러 개'의 데이처를 '순차적'으로 나열한 자료구조
 // : 다양한 타입을 하나의 배열에 저장 가능
 // : 0부터 시작하는 인텓스 번호를 가짐(1씩 증가)

 // - 각각의 데이터를 '요소'라고 부름
 // - 크기가 고정 X / 프로그램 실행 중 동적으로 사용가능.

 //# 2. 배열 사용 목적
 // : 집합적 데이터 관리 용이
 // :  순차적 접근
 // :  다양한 데이터 타입을 함께 저장

 //# 3. 배열 생성

 // 1) 리터럴 방식 (literal, 문자 그대로의 방식)
 // : 가장 직관적이고 간편함
 // [] (대괄호) 안에 원하는 요소들을 ,(콤마)로 구분하여 나열

let fruits = ['사과', '오렌지', '포도'];
let numbers = [1, 2, 3, 4];
let variableArray = ['문자', 123, true ,undefined, null];

 // 2) Array 생성자를 사용하는 방식

let arrayfruits = new Array(3);
let arrayfruits2 = new Array('사과', '오렌지', '복숭아');

//# 4. 배열 요소 접근 & 수정
// 각 요소는 고유한 인덱스를 통해 배열 요소 접근 & 수정 가능
let sports = ['축구', '야구', '농구'];
const basketball = '농구';
// basketball = 'basketball';

console.log(sports[2]);

sports[2] = 'basketball';
console.log(sports[2]);

// cf) 참조 자료형
// : 함수, 배열, 객체 등 (복합 자료형)
// >> 변수에 값이 아닌 '메모리 주소를 저장' 하여 '참조'

// 1) 요소 접근
// 배열명[인덱스 번호]

// 2) 요소 수정
// 배열명[인덱스 번호] = 수정 데이터 할당

//? 배열의 길이
//: 배열 명.length 속성
// >> 배열의 마지막 요소 인덱스 번호 === 배열의 길이 - 1
console.log(sports.length);

sports.length = 4;
// undefined - 배열의 길이를 늘이면 새 요소는 undefined로 초기화
console.log(sports[3]);
console.log(sports);


sports[5] = '배구'; // 중간 2개는 비워져 있음

console.log(sports);

//# 5. 배열 탐색 및 정보 확인
//자바스크립트의 배열이 가지는 기본 기능(함수)

let snacks = ['칸초', '초코송이', '포테토칩', '초코송이'];

//! 1) indexOf() ***
//: 배열의 지정된 요소를 찾고 그 요소의 첫 번째 안덳를 반환 (없으면 -1 반환)
console.log(snacks.indexOf('초코송이'));
console.log(snacks.indexOf('꼬깔콘'));

//! 2) lastIndexOf() ** 
// : 배열의 끝부터 시작하여 요소를 탐색 (없으면 -1 반환)
console.log(snacks.lastIndexOf('초코송이')); //3

//! 3) includes() ******* //!!매우 중요!!
// : 배열의 특정 요소가 존재하는지 확인
// : 해당 결과를 불리언 값으로 변환
let hasPhotatoChip = snacks.includes('포테토칩');
console.log(hasPhotatoChip);

//# 6. 배열 조작 함수(기능)
fruits = ['Apple', 'Banana'];

// 1) 요소 추가
// push(): 배열의 끝에 하나 이상의 요소를 추가
// >> 수정된 배열 길이를 반환
let newLength = fruits.push('Cherry');
console.log(newLength); // 3

// 2) 요소 삭제
// : pop(): 배열의 마지막 요소를 제거, 그 제거된 요소를 반환()

// +) unsfift()
// : 배열의 시작 부분에 하나 이상의 요소를 추가 - 수정된 배열 길이의 반환
newLength = fruits.unshift('Strawberry');
console.log(newLength); //2 

// + splies() *** //!중요
// splies(삭제할 요소 시작 인덱스, 삭제할 요소의 갯수) - 삭제
let removeFruits = fruits.splice(1, 1);
console.log(removeFruits); //['Banana']

// splies(시작 인덱스, 0, 아이템 나열, ... ) -  추가
fruits.splice(1, 0 ,'Mango', 'Peach');
console.log(fruits);

// 3) 요소 정렬 & 순서 변경

//sort(): 배열 요소 정렬 (오름차순)
console.log(fruits.sort());

//reverse(): 배열 요소 정렬 (내림차순) 
console.log(fruits.reverse());

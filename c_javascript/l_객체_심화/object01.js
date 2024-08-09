//object02.js

//! 자바스크립트 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성을 제공

//# 1. Number 객체의 기본 메서드
// cf) 기본 자료형 number

// Number - 자바 스크립트 내부에 직접 정의 되어있는 객체(데이터)
// : 수치형 제이터를 처리하는 메서드를 제공

//# 1) toFixed()
// : 소수점 이하 n자리까지만 출력

let num = 123.4567;
console.log(num.toFixed(3)); //123.457
console.log(num.toFixed(5)); //123.45670
console.log(num.toFixed(0)); //123

// 2) isNan(), isFinite()
// : 각각 NaN 인지 infinity인지 확인

// >> Number키워드 개체에 바로 적용, 인자값으로 확인할 데이터를 삽입

let notNum = Number('숫자로 변환 할 수 없는 값');
console.log(notNum); // NaN
console.log(notNum === NaN); //true

console.log(Number.isNaN(notNum)); // true

//infinity(양의 무한대), infinity(음의 무한대)
// cf) 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성

console.log(10 / 0);
console.log(-10 / 0);

let infinity = 10 / 0;
let mminusInfinity = -10 / 0;

console.log(Number.isFinite(infinity));
console.log(Number.isFinite(mminusInfinity));

console.log(Number.isFinite(10));

//# 2. String 객체의 기본 매서드
// : 문자열을 처리하는 메서드를 제공

//& 1) trim()
// : 문자열 양쪽 끝의 공백(띄워쓰기, 줄바꿈 등)을 없애는 매서드

let stringA =
`
안녕하세요 만나서 반갑소
ㅁ
ㅁ
ㄴㅁㄴㅇㅁㄴ

`;

let stringB =`  나는 공백    `;

console.log(stringA.trim());
console.log(stringB.trim());

//& 2) split()
// : 문자열을 특정 기호로 자르는 메서드 >> 배열로 반환

let manyData = `
  생년, 월, 일
  1999. 05. 06
  2000. 04. 07
  2001. 03. 08
  2002. 02. 09
  2003. 01. 10
`
manyData = manyData.trim();

manyData = manyData.split('\n');

// 줄 바꿈 기호 \n

console.log(manyData);

//배열을 순회하여 각 문자열 마다 공백을 제거
manyData = manyData.map(line => line.trim());

console.log(manyData);

//배열 내부의 문자열을, (쉼표) 기준으로 나누기
manyData = manyData.map(line => line.split(','));

//& 3) length
// : 문자열 길이를 반환
// >> 띄워쓰기, 줄바꿈도 한 개의 문자열로 인식
let stringC = 'hello, JS';
console.log(stringC.length);

//& 4) toUpperCase(), toLowerCase()
// : 모든 문자를 대문자 \ 소문자로 변환
console.log(stringC.toLocaleUpperCase());
console.log(stringC.toLowerCase());
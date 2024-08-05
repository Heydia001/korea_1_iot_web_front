//! d_opperate.js

// 연산자: 수학적 계산을 위한 코드
// > 산술, 할당, 비교, 관리

//# 1. 산술 연산자
// +, -, * / (사칙연산)
// ++(증가) ,--(감소), %(나눗셈-나머지)

let x = 10;
let y = 3;

console.log('=== 산술연산자 ==='); //콘솔창에서의 구분
console.log(x + y); //13
console.log(x - y); //7
console.log(x * y); // 30
console.log(x / y); // 3.33333
console.log(x % y);
console.log(10 % 2); //0

// +) 증강연산자
// : ++, -- 의 형태로 수를 1씩 증가 또는 감소시킬때 사용하는 연산자
// : 1항 (하나의 데이터)에 대한 연산식

x = 10; //변수 재 할당
console.log(x++); //10
console.log(x); //11
console.log(++x); //12

// 증강연산자의 경우 전위, 후위로 나뉨
//: 데잍터의 앞에 연산자가 있을 경우 전위 (바로 값을 변화!)
//: 데이터의 뒤에 연산자가 있을 경우 후위 (해당식에서 값을 바로 변환x, 그 다음 호출 시 값이 반영)

x = 10;
console.log(x++); //10
console.log(x++); //11
console.log(x); //12
console.log(x++); //12
console.log(x);  // 13

x = 10;
console.log(--x); //9
console.log(x); //9
console.log(--x); //8
console.log(x); //8
console.log(--x);  // 7

x = 10;
x++; //10
x++; //11
--x; //11
x++; //11
x; //12
x++; //12
++x; //14
--x; //13
console.log(x);

x = 14;
y = x-- + 5 + --x;

// 14 (-1) + 5 - 1 + 14
console.log(y);

//# 2. 할당(대입) 연산자 : 연산 방향이 '오른쪽에서 왼쪽'
// = (할당), +=, -=, *=, /=, &=

let a = 10; //a를 10에 할당
// 우항에서 좌항으로 들어갔다.
// 변수의 값을 넣을때 사용함
// 순서는 우항 > 좌항

// 더하기 후 할당
a += 5; // a = a + 5 = 15
// 빼기 후 할당
a -= 2; // a = a - 2 = 13
// 곱하기 후 할당
a *= 2 // a = a * 2 = 20 
// 나누기 후 할당
a /= 2; // a = a /2 //13

//#  3. 비교 연산자
// 피연산자 사이 (데이터들)의 상대적인 크기를 판단하여
// , 결과를 True & False로 반환 / boolean 타입

// 부등호
// >, <, >=, <=
// 동등, 부등: ==, !=
// 일치, 불일피: ===, !==

let num1 = 10;
let num2 = '10';

// 값의 동일성을 판단 (데이터 유형을 고려하지 않는다.)
// 동등 / 부등 
console.log(num1 == num2); //T
console.log(num1 != num2); //F

// 엄격하게 값과 데이터 유형의 완전한 동일성을 판단
// : 일치/불일치
// '!'의 위치는 좌측으로 고정
console.log(num1 === num2); //F
console.log(num1 !== num2); //T


// +) 문자열 비교 연산자
// 정렬 (기본값-오름차순)
let str1 = 'abc';
let str2 = 'abc';

console.log(str1 < str2); // a-z까지 뒤로 갈수록 큰값
console.log(str1 = str2);
console.log(str1 > str2);

num1 = 10;
num2 = '10';

console.log('===부등호 사용 비교===');
// >== 는 존재하지 않는다.
console.log(num1 > num2); //false
console.log(num1 >= num2); // true
console.log(num1 < num2); // flase
console.log(num1 <= num2); // true
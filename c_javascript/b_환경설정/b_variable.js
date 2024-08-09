//#b_variable.js

// 변수 : 데이터를 저장하기 위한 공간

// 변수 선언

//* 필수 변수 명명 규칙
// 영문자, 언더스코어, 달러만 사용가능 (이 후 숫자 사용가능)
// 띄워쓰기 허용x
// 기호는 _, $ aks tkdydrksmd
// 영어 대소문자를 구별 (number, Number은 서로다른 변수)
// 예약어 사용 x

// let 1numl - Error
// let num ber; - Error

//* 선택변수 명명규칙 -권장
// lowerCamelCase 사용을 권장
// : 시작은 소문자로 시작, 이어지는 단어의 시작만 대문자로 작성

// cf. UpperVamelVase
// : 시작을 포함하려 이어지는 단어의 시작만 대문자로 작성

// now, _now,  now&25, now_2  // <<사용이 가능하다.
// 25now, now 25, *now

//! 변수명 지정 시 의미있는 단어사용을 권장한다.
// ex. 올해연도 currentYear / birthYear
// age = currentYear - birthYear;

//! JS 변수선언 방식 (2가지 - let , var)
// 변수 선언 방법
// 변수종류 변수명;
// - 변수 초기화
// 변수명 = 데이터(값);

//! JS 변수 선언과 초기화
//변수 종류에 변수 명 = 데이터(값);

// let letVariable;
// var varVariable;

//  letVariable = 10;
// varVariable = 'hi';

// letVariable2 = 10; 
// varVariable2 = 'hi'; 
// 호이스팅 효과로 선언하기도 전에 값을 할당할 수 있다.

// let letVariable2 = 20;
// var varVariable2 = 'hi there';

//! let VS var의 차이 
// 공통점:
// 재할당 가능 (변수의 특성), 호이스팅 o

// 차이점:
// let : 동일한 영역내에서 같은 이름으로 재 선언 불가능
// var : 동일한 영역내에서 같은 이름으로 재 선언 가능 (사용 x)

// let varVariable2;
var varVariable2; // 사용 X

//* 나이 계산 프로그램 만들기

// 올해 령호, 태어난 연도, 니이에 대한 변수 선언
// 올해 연도를 나타내는 변수에는 2024 값 할당

// 태어난 연도는 prompt 창에서 값을 할당 받아옴
// 나이 변수 올해 연도 태어난 연도 변수를 사용해서 식 완성

let currentYear = 2024;
let birthYear;
let age;

birthYear = prompt('태어난 연도를 입력해 주세요.');
age = currentYear - birthYear;

//변수와 문자열을 동시 출력
// + 연산자와 같이
document.write(birthYear + '년에 태어난 사람의 나이는' + age + '세 입니다.');

//! 상수 (constant)
// : 변하지 않는 수
// : 한 번 할당 된 값을 변경할 수 X (재할당 불가)

//? 상수 명명 규칙 (필수 -  변수와 동일)
//* 권장사항
// : UPPER_SNAKE_CASE
// : 모든 대문자, 이어지는 단어는 언더스코어(_)로 구분
//! 상수 선언과 초기화 - 반드시 선언과 동시에 할당되어야 한다!
// const 변수명;

const PI = 3.14;

// PI = 2.14; Error: 상수에 재할당 불가!

const radious = prompt('반지름을 입력해 주세요.');
console.log('반지름: ' , radious * radious * PI);


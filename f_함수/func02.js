// func02.js

//! javascript 함수 구조
// 매개변수 & 인자 (parameter, argument) + 반환값

//# 1. 매개변수 (파라미터, parameter)
// : 함수를 정의하고 호출 시 함수의 데이터를 전달하는 방식 (변수) - 선언
// : 함수를 호출 시에는 괄호안에 인수(argument)를 넣어서 전달 - 호출

//# 2. 인자 (인수, argument)
// : 함수를 호출할 때 전달하는 실제 값
// : 함수 호출마다 다른 데이터 전달이 가능

function add (a, b){ // 소괄호 안의 a, b는 parameter
  console.log(a + b);
}

add (3, 4); // 소괄호 안의 3, 4는 인자값

//? javascript 에서의 parameter와 argument 사용
// : 두 가지의 수가 무조건 일치할 필요 X

// cf. 변수를 선언하고 초기화 하기 이전의 타입: undefined

function log(a) {
  console.log(a);
}

log(); // undefined - 전달하지 않은 파라미터의 값은 undefined로 지정
log('안녕하세요'); // 안녕하세요.

log('안녕하세요', '안녕하세요, 만나서 반갑습니다.'); //안녕하세요, 만나서 반갑습니다.
// - 여러개의 parameter & 인자값 나열 시(,) 콤마로 구분해서 나열 가능
// - 지정된 수의 파라미터 이상의 인수는 읽히지 X

function introduce() {
  let name;
  let age;
  console.log(`${name} is ${age} years old`)
}

introduce('김다혜', 100);
// introduce(100, '김다혜'); Error 매개 변수와 인자는 차례대로 묶임

//# 3.  반환값 (return, 리턴값)
// : 입력박아 처리한 결과를 '반환'
// : return 키워드를 사용하여 반환할 데이토를 지정가능

// >> 함수내에서 return 키워드 사용 사 
//    , return이 읽히면 함수의 실행을 즉시 중단하고 return 뒤의 값을 반환.

function subtract (a, b) {
  result = a - b;
  return result;
}

let outcome = subtract(10, 7); // 반환된 값을 outcome 변수에 저장 
console.log(outcome); // 3
console.log(subtract(5, 3)); //2

//? return이 없는 함수는 실행 시 unfined를 반환
//    >> 일반적으로 즉시 콘솔 출력 시 사용

// 연습문제 //
// - squre 함수 작성
// - 파라미터를 x로 지정
// - 반환값으로 x의 제곱을 지정
// - 반환 결과를 변수에 담아 해당 변수를 콘소랑에 출력(result)
// - 함수 선언 방식 3가지 모두 사용 (squre 1, 2, 3)


//1) 함수 선언문
function squre1(x) {
  let double = x * x;
  return double;
}

//2)함수 표현식
const squre2  = function(x) {
  return  x * x;
}

//3) 화살표 함수
const squre3 = x => x * x;


//! f_loop.js

// JS의 제어문
// : 조건문, 반복문

//# 반복문의 종류
// : for 반복문, while 반복문, do-while 반복문, (for...in 반복문, for ...of 반복문)

//! 반복문 (Loop)
// : 동일한 코드블록을 여러 번 실행할 수 있도록하는 제어문

// (+) 배열(Array)
// : 여러 개의 변수를 한 번에 선언하여 다룰 수 있는 자료형 (참조 자료형)

// - 순차적으로 저장 (데이터에 순서가 존재)
// - 기본으로 부여되는 순서 인덱스(Index, 시작이 0부터 1씩 증가하는 수)
// - 배열 내부의 각 데이터를 요소라고 부름

// 배열 선언 방법
//'변수' | '상수' 키워드 =[요소1. 요소2, 요소3, ...]
// 변수 명 지정 시 복수 명사 사용을 권장

let fruis =  ['apple', 'banana', 'cherry'];
let numbers =  [1, 2, 3,4, 5];
let booleans =  [false, false];

//요소에는 모든 타입의 데이터가 들어갈 수 있다.
let js = ['자바 스크립트', 123, true, null, undefined, [1, 2, 3]];

//? 배열의 요소에 접근
// 배열명 [인덱스 번호]

console.log(js[2]); //0부터 카운팅

//?배열의 길이를 확인
// length 속성을 사용하여 배열의 길이를 확인
// 배열명.length

console.log(js.length);

//마지막 요소의 인덱스 번호 + 1 === 배열의 길이

//# 1. for 반복문
// : z코드를 정해진 횟수 만큼 반복 실행할때 사용

//* for 반복문의 구조 (기본 형태)

/*
for (초기화 식; 종료 조건; 증감식) {
  표현식의 결과가 참인 동안에 실행할 코드
}
? 초기화식
: 반복문의 시작될 때 단 한번만 실행

? 종료조건
:각 반복 사이클의 시작에서  평닥되는 표현식
>> true면 중괄호 코드 실핼, false면 반복문 종료

? 증감식
: 각 반복 사잌ㄹ이 끝날 때(반복문이 전체 반복문을 ㄱ쳤을때) 마다 실행
>> 초기화식의 변수를 증가 또는 감소시킴

 */


console.log('===for 반복문===');
// 0부터 4까지의 숫자(정수)를 콘솔창에 출력

for(let i = 0; i < js.length; i++){
  let num = i + 1; 
  console.log(num);
}

/*
별찍기
별의 갯수가 1씩 증가
n행 n개의 별이 찍힘
1행에 1개의 별

*
**
***
****
*****
******


*/


// for (let i = 1; i <= 5 + 1; i++){
//   let stars = '';
//   for (let j = 1; j < i; j++){
//     stars += '*';
//   }
//   console.log(stars);
// }

//별찍기 2


//역순

// for (let i = 5; i > 0; i--){
//     let stars ='';
//     for (let j = 0; j < i; i++ ){
//       stars += '*';
//     }
//     console.log(stars);
// }

/*
    *
   **
  ***
 ****
*****  

행의 시작 시 공백이 부여 
문자열 안에 ''
*/

// for (let i = 5; i > 0; i--){
//   let blank = '';
//   let stars ='';
//   blank += ' '
//   for (let j = 1; j < i; j++){
//     stars = '*';
//   }
//   console.log(blank + stars);
// }

//행에대한 반복
for (let i = 1; i <= 5; i++) {
  let blank ='';
  let stars = '';
  for (let j = 1; j <= 5 - i; j++){
    blank += ' ';
  }
  for (let k = 1; k <= i; k++){
    stars += '*';
  }
  console.log(blank + stars);
}
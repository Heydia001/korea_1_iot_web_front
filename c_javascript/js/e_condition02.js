//! 4.  switch문
// 원하고자 하는 기능을 스위치로 끄고 킨다.
// : 하나의 표현의 값을 확인하고 해당값과 일치하는
// case 문의 코드 블럭을 실행

//* Swich case문의 구조 (기본 구조)

/*
case 값1{
  식이 값1과 일치할 경우
} case 값2{
  식이 값2과 일치할 경우
} case 값3{
  식이 값3과 일치할 경우
} case 값4{
  식이 값4과 일치할 경우
}
  ...
defult:
  식이 어던 값과도 일치하지 않을때 실행
 */

let fruit = 'banana';

switch (fruit){
  // case의 데이터 유형은 switch 식의 데이터 유형과 동일
  case 'apple' :
    console.log('사과');
    break;
    // 동일한 case 값을 찾을 경우 그 다음 이어지는 코드를 모두 실행
    //  > 코드실헹 흐름을 중지하려면 break 키워드를 사용하여 switch문을 탈출
  case 'banana' :
    console.log('바나나');
    break;
  case 'orange' :
    console.log('오렌지');
    break;
  default :
  console.log('아무것도 실행x');
};

//! 조건문 종합 예제
// 점를 변수에 담아 해당 점수가
// 0미만 100 초과 일 경우 '유효한 점수가 아닙니다.'
// 90 이상 A
// 80 이상 B
// 70 이상 C
// 60 이상 D
// 그외 F

//? if 문 (else if, else 문)
let score;
score = 60;

if (score >= 90 && score <= 100){
  console.log('A');
} else if (score >= 80){
  console.log('B');
} else if (score >= 70){
  console.log('C');
} else if (score >= 60){
  console.log('D');
} else if (score >= 0){
  console.log('f');
} else {
  console.log('유효한 점수가 아닙니다.');
}

//? switch문
switch (true) {
  case (score < 0 || score > 100):
    console.log('유효한 점수가 아닙니다.');
    break;
  case (score >= 90):
    console.log('A');  
    break;
  case (score >= 80):
    console.log('B');  
    break;
  case (score >= 70):
    console.log('C');  
    break;
  case (score >= 60):
    console.log('D');  
    break;
  default:
    console.log('F');
    
}

//? 삼항 연산자
let grade = 
score > 100 && score < 0 
  ?  '유효한 점수가 아닙니다.' : score >= 90 
  ? 'A' : score >= 80 
  ? 'B' : score >= 70 
  ? 'C' : score >= 60
  ? 'D' : F;

console.log(grade);


//+) 조건식 예제
true? console.log('A') : console.log('B');
false? console.log('B') : console.log('A');
true || console.log('A'); // 출력이 안 됨
true && console.log('A');


//* 조건문 Best Practice 
// 1.  비교 연산자 사용 시 '==' 또는 '==='사용을 권장

console.log(0 == false);
console.log(0 === false);

// 2. 논리 자료형 변수에 대한 조건 활용 시 일치/불일치 여부를 생략
let isTrue = true;
if (isTrue === true){
  console.log('isTrue는 참이다.');
}
//obj03.js

//! 자바스크립트의 객체프로토 타입
// : 객체의 원형(프로토타입)을 사용하여 새로운 객ㅊ체를 생성
// >> 객체의 속성과 매서드 재사용 가능

// cf) 프로토 타입: 시제품
// > 템플릿! < class?

//# 1. 생성자 함수를 사용한 객체 생성
// :  new 키워들 ㄹ생성하여 함수를 호출 하고
// :  관례적으로 함수명을  UpperCamelCase 사용.
function Person(firstname, lastName, age, gender){
  this.name = {
    first: firstname,
    last : lastName
  };
  
  this.age = age;
  this.gender = gender;

  this.greeting = function() {
    // 객체의 매서드는 화살표 보다 function 키워드 사용을 권장
    console.log(`Hello, ${this.name.last}`);
  }
}

let person1 = new Person ('dh', 'kim', 50, 'female');

person1.greeting();

// class를 사용한 객체 생성 방법

//? 새로운 객체를 생성하는 템플릿 역할

//! 클래스의 생성자
// : 클래스에서 객체를 생성하고 초기화하기 위한'특별한 매서드'

// : new 키워드를 쓰면 자동 호출된다.
// >> 각 클래스는 하나의 constructor만을 가짐

//class의 method
// : 클래스를 기반으로 생성된 객체가 공통적으로 가지는 함수
// >> 클래스 내부에서는 function 키워드 사용 x

// === 클래스 생성 방법 ===
//: class 키워드를 사용
//: 클래스명은 대문자 사용을 권장.(UpperCamelCase)

/*
class 클래스 명
*/

class Human {
  // 속성 - 생성자 함수 정의와 동일
  name;
  age; 
  job;
  // 생성자 같은 경우 constructor()fksms aptjem wjddml
  // : 생략 시 빈 생성자가 자동 정의된다.

  // constructor (name, age, jpb);

}
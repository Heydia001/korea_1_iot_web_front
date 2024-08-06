//obj04.js

//! 객체의 참조 타입 이해

// '원시' 타입 (기본자료형)

// '참조' 타입 (참조 자료형)
// : 메모리에 저장된 객체의 주소를 저장 (변수에 주소 값이 저장)

let computer1 = {
  name : '삼성 노트북'
}

let computer2 = computer1; // computer2에는 computer1의 주소값이 저장

computer1.name = '맥북';

console.log(computer2);

function changeName(computer) {
  computer.name = '아이패드';
}

changeName(computer2);  

console.log(computer1.name); // 아이패드

//# == 객체의 복사 (깊은 복사 & 얕은 복사) ==

// 1) 얕은 복사
// : 객체의  속성값이 원시 타입인 경우 그 값이 직접 복사
// : 속성 값이 참초 타입일 경우 해당 참조 (메모리 주소)만 복사

let animal1 = {
  name : 'choco',
  owner: {
    name : '김다혜',
    job : 'Dev'
  }
}

let animal2 = animal1;

animal2.name = '초코';
animal2.owner.name = '김도결';

console.log(animal1.name); //초코
console.log(animal1.owner.name); //김도결

console.log(animal2); // 동일한 주소값을 참조한다.

//  2) 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// : 원본 객체와 본사본이 서로 독립적

//JSON.parse(JSON.stringfy(object))

// JSON.stringify(obj)
// : 전달받은 객체를 JSON문자열로 변환

// JSON.parse(json)
// : JSON 문자열을  JS 객체로 변환: 새로운 메모리 위치에 할당된다.

let book = {
  title: '어린왕자',
  author: '생텍쥐페리',
  punlishYear: 2024
}

let book2 = JSON.parse(JSON.stringify(book));

book2.title= 'little prince';
book2.punlishYear = 2023;

console.log(book2);
console.log(book);

// JSON 형식
// javascipt object Notation (자바 스크립트 객체 표기법)

//# 객체의 속성 확인 연산자
// { title: 'little prince', author: '생텍쥐페리', punlishYear: 2024 }
// 일반적으로 해당 속성이 존재하는지 확인하기위해 in 연산자를 사용

 console.log('title' in book);
 console.log('author' in book);
 console.log('punlishYear' in book);
 console.log('hello' in book);

 //! 속성을 삭제
 // : delete 연산자를 사용
 // >> 속성 삭제시 값이 자동 삭제

 delete book.author;
 console.log('author' in book);
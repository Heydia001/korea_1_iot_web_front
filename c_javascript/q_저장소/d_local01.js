//d_local01.js\

//! 로컬 스토리지(local Storage)
// : 웹 브라우저가 제공하는 저장 공간
// >> 사용자의 컴퓨터에 영구적으로 데이터를 저장 가능

// HTML5 웹 스토리지 사양의 일부 됩으로
// , 쿠키의 한계를 보완한 큰 저장 용량과 보안을 제공
 
//? 1. 로컬 스토리지 데이터 저장
// : localStorage.setItem(key, value)
// >> 웹 브라우저의 저장 공간에 데이터 저장

localStorage.setItem('key', 'value');
localStorage.setItem('username', 'kdh');
//cf) username, userName

//# 로컬 스토리지의 데이터 저장
// : 기본적으로 문자열 데이터만 가능
// >> 기본 자료형의 경우 저장 가능
// >> 인식을 문자열로 한다.
localStorage.setItem('userAge', 50);
localStorage.setItem('isStudent', true);

// >> 
// >> JSON.stringfy() 메서드를 사용

let userInfo = {
  name : '김다혜',
  age : 50 
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

//? 로컬스토리지 데이터 불러오기
// localStorage.getItem(key)
// >> 해당 key가 존재하지 않으면 null을 반환

let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgeValue = localStorage.getItem('userAge');

if (keyValue || usernameValue ||userAgeValue) {
  console.log(keyValue);
  console.log(usernameValue);
  console.log(userAgeValue);
}

// 2) 참조 자료형(객체, 배열)
let storedData = localStorage.getItem('userInfo');
let userInfoValue = JSON.parse(storedData);
console.log(userInfoValue);
console.log(userInfoValue.name);

//# 로컬스토리지에서 데이터를 가져오는 경우
// : null을 반환하는 상황을 대비하여 데이터 사용 전 null 값 처리를 확인

// ? 로컬 스토리지 데이터 삭제
// : localStorage.removeItem(key);
// : localStorage.clear();

localStorage.removeItem('userAge');
localStorage.removeItem('isStudent');

localStorage.clear();
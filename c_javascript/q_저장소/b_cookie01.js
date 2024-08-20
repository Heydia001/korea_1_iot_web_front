/*
!cookie

: 웹 사이트가 사용자의 브라우저에 저장하는 작은 텍스트 파일
& 쿠키의 구조
- 이름 : 
- 값 : 저장하는 정보의 문자열 
- 만료 날짜 : 쿠키의 수명
- 경로값
- 도메인
- Secure 플래그
- HttpOnly 플래그
*/
/*

& 쿠키 생성 및 수정
 1. 쿠키생성 & 수정
: document.cookie 속성

>> documents.cookie에 문자열을 할당하면 생성과 수정이 가능하다.
(필수 ) 이름, 값
(선택, 추가사항 ) 만료 날짜 경로 도메인 보안

*/

//? 기본형식 documents.cookie = '쿠키이름 = 쿠키값; expires = '날짜'; path = '경로'; domain = '도메인'; secure = '';

//EX) 사용자 이름을 쿠키 설정
// "username" 이라는 쿠키에 "KDH" 라는 값을 저장
// - 경로의 경우 해당 웹 페이지에서 쿠키값에 접근 할 수 있는 경로를 지정한다.
// '/' 빈 슬래시 사용: 어떤 경로에서든지 쿠키값에 접근 가능

document.cookie = "username = KDH; path = /; "


// - 만료날짜 expire
// >> 만료날짜 미설정시 세션 쿠키로 자동 설정되어 브라우저가 닫힐 때 자동 삭제
// >> 만료날짜


let date = new Date(); // 현재 날짜 시간을 저장
// >> Date개체에 .setTime() 속성: 시간 데이터를 설정
// >> Date개체에 .getTime() 속성: 시간 데이터를 가져오기

date.setTime(date.getTime() + (1 * 60 * 60 * 1000)); // 현재 시간에 한 시간을 추가

let expires = "expires=" + date.toUTCString();
// "expires = 시간 문자열"

document.cookie = "userAge = 50;" + expires + "; path = /;"
// "userAge = 50;" + expires = 시간문자열 + "; path = /;"

let date2 = new Date();
date2.setTime(date2.getTime() + (24 * 60 * 60 * 1000)); 

let expires2 = "expires=" + date2.toUTCString();
document.cookie = "oneDay=하루;" + expires2 + "; path= /;"
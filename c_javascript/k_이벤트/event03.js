//event03.js

//! 페이지 로드 이벤트
//! DOMContentLoaded 이벤트

//: HTML문서가 완전히 로드되고DOM트리가 완성되었을때 발생
// >> 이미지, css. 스크립트 파일이 로드되지 않아도 이벤트 발생

// cf) load이벤트
//: 페이지의 모든 콘텐츠가 완전히 로드된 경우에만 발생


window.addEventListener('load', function() {
  console.log('페이지의 모든 컨텐츠가 로드 되었습니다.');
})

// 실제 HTLM DOM트리가 없을경우: js 동작방식에 오류
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 트리가 완성되었습니다.');
})
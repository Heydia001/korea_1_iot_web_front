//review02.js

//! 장바구니 상품 객ㅊㅔ

// : 사용자가 선택한 상품들을 관리

//# 1. 장바구니 시스템의 기능을 정리

// 1. 추가: 장바구니에 상품을 추가
// 이미 존재하는 경우 수량을 업데이트 할 것임

// 2. 조회 현재 장바구니의 상품 기록을 조회

// 3. 수정: 특정 상품의 수량을 변경

// 4. 삭제: 장바구니에서 특정 상품을 제거

//# 2. 장바구니 내의 상품 객체 정의
// 1) id - 상품의 고유 식별자
// : 상품을 구분하는 용도
// number타입으로 지정

// 2) name: 상품의 이름 : String
//: 사용자에게 상품을 표시하기 위함

// 3) price: 상품의 가격 : number
// : 단위($, 달러)

// 4) quantitiy - 수량 : number
// 사용자가 선택한 상품의 수량

//? 상품 객체 예시
let product = {
  id : 1,
  name: 'banana',
  price : 1.5,
  quantity : 2
}

//3. 장바구니 시스템 구현

// 상품을 저장할 배열 초기화 (장바구니)
let cart = [];

//? 1. 장바구니에 상품을 추가
function addToCart(id, name, price, quantity) {
  // 장바구니 내에 해당 상품이 있는지 검색
  // (findIndex: 배열 내에 동일한 요소가 있는지 찾고 index를 반환 / 없으면 -1 반환)
  const index = cart.findIndex(item => item.id === id);
  // item 이 장바구니에 있을 경우
  if (index > -1){
    cart[index].quantity += quantity; // 해당 상품의 수량을 업데이트
  } else { //상품이 장바구니에 없을경우
    cart.push({id, name, price, quantity}); //새 상품을 장바구니에 추가하는 로직
  }
  displayCart();
  };

//? 2. 장바구니 내의 모든 상품을 조회
function displayCart (){
  console.log('');
  console.log('Cart Contents');
  cart.forEach( item => {
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s Price: $ ${item.price * item.quantity}`);
  });
}

//? 3. 특정 상품의 수량을 변경하는 함수

function updateQuantity (id, quantity) {
  const index = cart.findIndex(item => (item.id == id));
  //상품이 존재하고 수량이 반드시 0보다 큰 경우 : 상품 업데이트
  if (index > -1 && quantity > 0){
    cart[index].quantity += quantity;
  } else {
    console.log('Invalied Quantity OR item not found');
  }
  displayCart(); //장바구니 내용 출력
}

//? 4. 장바구니에서 상품을 삭제하는 함수
function removeFromCart(id) {
  // id가 일치하지 앉는 상품만 남겨 장바구니를 업데이트
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

//? 5. 장바구니의 총 합을 계산하는 함수
// reduce() 메서드
// 배열.reduce((acc, value, index, array) => { })
function calculateTotal (id, quantitiy, price) {
  let total = cart.reduce((sum, item) => sum += (item.quantity * item.price), 0);
  console.log(`Cart Total Price: ${total}`);
}

//? 6. 장바구니 전체 상품을 삭제하는 함수
function clearCart() {
  cart = [];
  console.log('Cart id empty!');
  displayCart();
} 

//# 4. 장바구니 시스템 사용
addToCart(1, 'banana', 1.5, 3);
addToCart(1, 'banana', 1.5, 1);

addToCart(2, 'orange', 2, 1);
addToCart(3, 'mango', 4, 3)
removeFromCart(1);

updateQuantity(1, 5);

removeFromCart(1);

calculateTotal(); //

// === 추가기능 ===
// +) 장바구니 상품의 총 가격을 계산
// +) 전체 장바구니 젲거


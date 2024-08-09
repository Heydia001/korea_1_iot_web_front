{/* <카페 키오스크>
C
- 주문 목록에 내가 선택한 음료 담기
  객체
  id : 음료 고유 식별자 
  name : 음료 이름
  price : 음료 가격 
  quantity : 음료 갯수

R
- 주문 내역 출력
  display
  List
  TotalPrice

U
addDrink  
addQuantity
- 음료 
- 음료 수
  
D
removeDrink
removeAll
- 음료 
- 음료 수
- 목록 모두 비우기 */}

let drink = {
  id : 1,
  name : 'americano',
  price : 1500,
  quantity : 1
}


let cart = [];

function addToCart (id, name, price, quantitiy){
  const index = cart.findIndex(id => drink.id === id);
  if (index > -1) {
    cart[index].quantitiy += quantitiy; 
  } else {
    cart.push({id, name, price, quantitiy})
  }
  displayCart();
}

function addQuantity(id, quantitiy){
  const index = cart.findIndex(drink => drink.id = id);
  if (index > -1 && quantitiy > 0) {
    cart[index].quantitiy += quantitiy;
  } else {
    console.log('invailed Quantity or Item');
  }
  displayCart();
}

function displayCart() {
  cart.forEach( drink => {
    console.log(`${drink.name} quqntity : ${drink.quantitiy}`);
    console.log(`${drink.name}'s Total Price: ${drink.price * drink.quantitiy}`);
  })
}

function removeDrinkFromCart(){
  cart = cart.filter(drink => drink.id !== id);
  displayCart();
}

function removeAll() {
  cart = [];
  console.log('your cart is empty');
  displayCart();
}

addToDrink(1, 'americano', 1400, 3);

removeDrink(1);
// removeAll();
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
let product = {
  id : 1,
  name: 'banana',
  price : 1.5,
  quantity : 2
}
let cart = [];

function addtoCart (id, name, price, quantity) {
  const index  = cart.findIndex((item) => item.id === id);
  if (index > -1){
    cart[index].quantity += quantity;
  } else {
    cart.push({id, name, price, quantity});
  }
};

function display() {
  console.log(object);
};

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
}

function updateTodos (id, quantity){
    let index = cart.findIndex(item => (item.id == id));
    if (index > -1 && quantity > 0){
      cart[index] += quantity;
    } else {
      console.log("envailed");
    }
}

function clearCart (){
  cart = [];
}

function totalCalculation (id, quantitiy, price){
  let total = cart.reduce((sum, item) => (sum += item.quantity*item.price, 0))
}


function toalPrice1 (){
  let total = cart.reduce((total, item) => {(item.price) * (item.quantity)},0)
}


function totalPrice2() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateTotal (id, quantitiy, price) {
  let total = cart.reduce((sum, item) => sum += (item.quantity * item.price), 0);
}


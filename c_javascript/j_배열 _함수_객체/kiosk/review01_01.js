let cart = [];

function addToCart(id, name, price, quantity) {
  const index = cart.findIndex(item => item.id === id);
    if (index > -1){
    cart[index].quantity += quantity; 
  } else { 
    cart.push({id, name, price, quantity}); 
  }
  displayCart();
  };

function displayCart (){
  console.log('Cart Contents');
  cart.forEach( item => {
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s Price: $ ${item.price * item.quantity}`);
  });
}

function updateQuantity (id, quantity) {
  const index = cart.findIndex(item => (item.id == id));
  if (index > -1 && quantity > 0){
    cart[index].quantity += quantity;
  } else {
    console.log('Invalied Quantity OR item not found');
  }
  displayCart(); 
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

function calculateTotal (id, quantitiy, price) {
  let total = cart.reduce((sum, item) => sum += (item.quantity * item.price), 0);
  console.log(`Cart Total Price: ${total}`);
}

function clearCart() {
  cart = [];
  console.log('Cart id empty!');
  displayCart();
} 


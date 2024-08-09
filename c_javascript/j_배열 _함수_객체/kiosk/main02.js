function addToDrink (id, name, price, quantity) {
  const index = cart.forEach(id => drink.id === id);
  if (index > -1){
    cart[index].quantity += quantity;
  } else {
    cart.push = ([id, name, price, quantity]);
  };
}
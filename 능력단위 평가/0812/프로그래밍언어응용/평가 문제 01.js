let orderedProduct = [];

class User {
  constructor(name, age, email){
    this.name = name;
    this.age = age;
    this.email = email;
  }
  printInfo(){
    console.log(`사용자 이름은 ${this.name}입니다., 사용자 나이${ this.age}세 이며 이메일은 ${this.email} 입니다.`);
  }
}

class Product {
  constructor (name, price){
    this.name = name;
    this.price = price;
  }
  printProduct(){
    console.log(`${this.name}상품은 ${this.price}원 입니다.`);
  }
}

class Order {
  constructor(user, product, quantity) {
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }

  printOrderSummary(){
    console.log(`${this.user.name} ${this.product.name} ${this.product.price * this.quantity}`);
  }
}

  let user1 = new User('김다혜', 50, 'kdh@naver.com');
  let product1 = new Product ('사과' , 1500);
  console.log(user1);
  console.log(product1);
  let order1 = new Order (user1, product1, 3);
  order1.printOrderSummary();


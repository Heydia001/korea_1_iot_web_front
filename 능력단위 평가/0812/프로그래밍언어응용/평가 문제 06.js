let numbers = [1, 2, 3, 4, 5];
let sum = 0;

    
function calculateSum() {
  sum = numbers.reduce((sum, cur) => sum += cur);
  return sum;
}

alert(`${calculateSum()}`);
console.log(calculateSum());
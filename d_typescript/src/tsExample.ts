let count: number = 0;

function updateDisplay() {
  const countElement = document.getElementById('countValue'); 
  if(countElement) {
    countElement.textContent = count.toString();
  }
}

function increment(): void {
  count++;
  updateDisplay();
}

function decrement(): void {
  count--;
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');

  if(incrementBtn) {
    incrementBtn.addEventListener('click', increment);
  }

  if(decrementBtn) {
    decrementBtn.addEventListener('click', decrement);
  }
})
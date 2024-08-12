const userInput = "Hello World";

function solution() {

  let result = userInput.trim()
                        .split(' ')
                        .reverse()
                        .join("")
                        .toUpperCase();
  return result;
}

console.log(solution(userInput));
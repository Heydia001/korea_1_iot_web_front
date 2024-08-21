export const tmp = '';

function syncFunc01() {
  let sum = 0;

  for(let i = 0; i < 9999999999; i++) {
    sum += i
  }
  return sum;
}

function syncFunc02() {
  let sum = 0;

  for(let i = 0; i < 100; i++) {
    sum += i
  }
  return sum;
}

function example() {
  console.log(`첫 번째 작업 시작`);
  let result = syncFunc01();
  console.log(`첫 번재 작업 완료: ${result}`);

  console.log(`두 번째 작업 시작`);
  let result2 = syncFunc02();
  console.log(`두 번재 작업 완료: ${result2}`);
}

example();

//# 3. 동기 프로그래밍의 장단점
// 장점
// - 간단성
// - 디버깅 용이

// 단점
// - 응답성 저하, 코드의 활용(사용도)가 저하
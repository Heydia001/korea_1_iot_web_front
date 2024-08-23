//generic02.ts
export const tmp = '';

//예제 ) 제네릭함수 구현

function reverseArray<T>(array: T[]): T[] {
  // 배열 메서드: reverse()
  // >> [1, 2, 3].reverse() === [3, 2 ,1]

  let reverseArr = array.reverse();
  return reverseArr;
}

let stringArr = reverseArray(['1', '2', '3']);
console.log(stringArr);

let booleanArr = reverseArray ([true, false, true, false]);
console.log(booleanArr);

// 예제2) 제네릭 인터페이스 정의
interface KeyValue<K, V> { 
  key: K;
  value: V;
}

let keyVlaue: KeyValue<string, number> = {
  key: '김다혜',
  value: 123
}

let anotherKeyValue: KeyValue<boolean, number> = {
  key: true,
  value: 200
}
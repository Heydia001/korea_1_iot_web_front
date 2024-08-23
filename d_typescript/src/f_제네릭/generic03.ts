//generic03.ts

export const ymp = '';

//! 제네릭의 제약 조건

//? 제약 조건 (constraints)
//: 타입 매개변수가 특정 조건을 만족해야 한다는 것을 명시하는 방법
// >> 제네릭타입의 사용 범위를 제한

//? 제약조건의 예시
interface ILength {
 length: number;
}

// T라는 타입변수는 ILength 인터페이스를 포함하는 타입이여야 한다.
// '타입변수' extends(확장) 반드시 포함 할 타입
// >> T 타입의 데이터는 반드시 length 속성을 가져야함.
function constraints<T extends ILength>(arg: T): T{
  console.log(arg.length);
  return arg;
}

let data01 = constraints({
  length: 10.
  //length 속성을 반드시 포함하는 객체를 인자로 전달!
   //>> 추가로 다른 속성 명시 가능 (확장)
  //  value: 3,
  //  addedOption: '안녕하세요'
})

type Type = {
  name: string;
  age: number;
}

type Union = keyof Type;

//? 조건부 타입
// : 매개변수에 대한 조건 표현식을 사용하여 타입을 결절하는 방식
// >> if문과 유사한 기능

type Check<T> = T extends string? 'String' : 'Not a String';

type Type1 = Check<string>; // String
type Type2 = Check<number>; // Not a String

function checkType<T>(value: T): Check<T> {
  let result = typeof value === 'string' ?  ('STring' as Check<T>) : ('Not a String' as Check<T>);
  return result;
}

console.log(checkType<string>('안녕하세요.'));
console.log(checkType(500));
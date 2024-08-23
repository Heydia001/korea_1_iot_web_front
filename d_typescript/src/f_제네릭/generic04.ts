//generic04.ts

export const tmp = '';

//! 유니온 타입과 제네릭
//유니온 타입 (or, |)
// : 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네리그이 타입변수에 적용
// extends 키워드를 사용 (확장)

//해당 함수 호출 시 string 혹은 number타입의 매개변수만 적용
function unionGeneric<T extends string | number>(value: T) {
  if(typeof value === 'string') {
    return value.toLowerCase();
  }
  return value;
}

const result1 = unionGeneric('StRinG');
const result2 = unionGeneric(1000);

console.log(result1, result2); //string 1000

//# 제네릭 유틸리티 타입
// : TS에 내장된 제네릭타입
// >> 기존의 타입을 변환하거나 조작하는데 사용

//1) Partial(부분적인, 선택적인)
// >> 모든 속성을 선택정으로 만들어줌 
// >> Partial<T>

interface User {
  name: string;
  age: number;
}

const users: {[key: number]: User} = {
  1: {
    name: '김다혜',
    age: 40
  },
  2: {
    name: '김도결',
    age: 30
  }
}

function updateUser(id: number, changes: Partial<User>) {
  const user = users[id]; // User 타입의 객체
  if (!user) {
    console.log(`해당 id의 사용자는 없습니다.`);
  } 
  // changes (객체타입 >> name과 age 속성이 모두 선택적 property)
  users[id] = {... user, ...changes} ; // 스프레드 연산자를 사용해서 객체의 '속성: 값'의 형태만 추출
  // {name: '김다혜', age: 40, name: '김도결', age: 30}
}

updateUser(1, {name: '홍길동'});
updateUser(2, {age: 10});
updateUser(3, {name: '강감찬'});

console.log(users[1]);
console.log(users[2]);
console.log(users[3]);

updateUser(1, {name: '유관순', age: 20});
console.log(users[1]);

//2) Readonly
// : 모든 속성을 읽기 전용 속성으로 변경(상수)
// : Readonly<T>

interface Human {
  name: string;
  age: number;
}

let user: Readonly<Human> = {
  name: '김다혜',
  age: 50
}

// user.name = '홍길동'; -Error

// 3) Omit (생략하다)
// : 특정 속성을 제거한 타입을 반환
// : Omit<T, K>
// >> T타입에서 K 속성을 제거함

interface Employee {
  id: number;
  name: string;
  age: number;
  position: string;
}

type EmployeeWithoutId = Omit<Employee,'id'>;

const newEmployee: EmployeeWithoutId = {
  name: '홍길동',
  age: 30,
  position: 'Dev'
}

const totalData: Employee = {
  id: 3,
  name: '강감찬',
  age: 50,
  position: 'General'
}


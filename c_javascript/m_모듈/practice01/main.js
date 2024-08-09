// main.js

//1) add
// :Name import 

//2) substract
// : Default import

//3) multiply
// : Named Import (as 구문: mp)

//4) divided
// : 모듈 전체 가져오기

import {add} from './mathModule.js';

import substraction from './mathModule.js'

import { multiply as mp } from './mathModule.js'; 

import * as mathModule from './mathModule.js';

console.log(add(10,5));
console.log(substraction(10,5));
console.log(mp(10,5));
console.log(mathModule.divide(10,5));

//cf) 프로그래밍에서  0으로 나누는 경우
// >  보통 0으로 나누는 경우 오류 발생
// 나누는 값(b)이 0이 되지않도록 조건문을 달아 둔다. 
console.log(mathModule.divide(10,0));
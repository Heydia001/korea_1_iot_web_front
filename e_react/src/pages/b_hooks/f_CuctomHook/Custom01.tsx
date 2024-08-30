import React from 'react'
import { useCounter } from './useCounter';
//! CustomHook
// :  리액트의 기본 Hook

//! CustomHook 생성 방법
// >> use로 시작하는 함수 정의
//    : 해당 함수 내부에서 다른 Hook 호출
// >> 결과와 기능을 반환

export default function Custom01() {
const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      {count}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}

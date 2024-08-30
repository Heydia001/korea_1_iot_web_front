import React, { useReducer } from 'react'
import { reducer } from './UseReducer01';

export default function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div
      style={{
        backgroundColor: 'pink'
      }}  
    >
      <h3>리듀서 함수 재사용</h3>
      <h2>useReducer를 사용한 상태관리</h2>
    <p>count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
    </div>
  )
}

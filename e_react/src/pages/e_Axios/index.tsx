import React from 'react'
import Axios01 from './Axios01'
import { useCountStore } from '../f_GlobalState/Zustand01';

export default function Index() {
  const { count, increment } = useCountStore();

  return (
    <div>
      <h1>리액트 HTTP 통신 라이브러리 (Axios)</h1>
      <Axios01 />

      <p>{count}</p>
      <button onClick={increment}>증가</button>
    </div>
  )
}
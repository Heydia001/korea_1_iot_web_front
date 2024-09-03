import React from 'react'
import Context from './Context'
import Zustand01 from './Zustand01'
import Zustand02 from './Zustand02'

export default function Index() {
  return (
    <div>
      <h1>리액트 전역상태관리 (ContextAPI / Austand)</h1>
      <Context />
      <hr />
      <Zustand01 />
      <Zustand02 />
    </div>
  )
}

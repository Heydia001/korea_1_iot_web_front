import React from 'react'
import { NavLink } from 'react-router-dom';

//! Link VS NavLink
// >> a태그와 유사하게 동작
// >> 페이지를 새로 고침하지 않고 SPA의 다른 경로로 이동

// 1) Link
// : 가장 기본적인 체이지 전환 컴포넌트 (a태그)
// >> 

// 2) NavLink
// : Link와 유사하지만, 현재 활성화 된 페이지 경로에 대한
//   추가적인 스차일 또는 클래스명 적용 가능


export default function NaviBar() {
  const links = ['/','basic', 'hooks', 'routerComponent', 'routerhook'];


  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "10px",
        padding: "10px 20px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {links.map(link=> (
        <NavLink 
        to={link} 
        key={link} 
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'white' : 'black',
          backgroundColor: isActive ? 'red' : 'lightgray',
          padding: '10px 20px',
          borderRadius: '5px'
        })}
      >
        {link === '/' ? 'Home' : link}
        </NavLink>
      ))}
    </div>
  )
}

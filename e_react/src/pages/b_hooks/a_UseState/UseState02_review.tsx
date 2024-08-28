import React, { useState } from "react";

interface ILogin {
  id: string;
  password: string
}

export default function UseState02() {
  const [inputValue, setInputValue] = useState<string>("");
  const [login, setLogin] = useState<ILogin>({
    id: '',
    password: ''
  });

  const { id, password } = login;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValue(e.target.value);
  };
  const handleResetClick = () => {
    setInputValue("");
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value 
    })
  }

  return (
    <div>
      <p style={{ color: "blue" }}>useState와 이벤트 핸들러 같이 사용하기</p>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>
      <hr />
      <h5>여러 개의 입력 상태 관리</h5>
      <form>
        <input 
          type="text" 
          name="id"
          placeholder="아이디" 
          value={id} 
          onChange={handleLoginChange}
        />
        <p>아이디: </p>

        <input 
          type="text" 
          name="password"
          placeholder="비밀번호" 
          value={password} 
          onChange={handleLoginChange}
        />
        <p>비밀번호: </p>
      </form>
    </div>
  );
}
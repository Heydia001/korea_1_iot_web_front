import React, { useCallback, useState } from 'react'

// useCallback 훅
// >> 주로 자식컴포넌트에 함수를 전달할떄 사용
//# 자식
const Button = React.memo(({handleClick}: { handleClick: () => void }) => {
  console.log('버튼이 렌더링되었습니다.');
  return <button onClick={handleClick}>클릭</button>
});

//# 부모
export default function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  // 자
  // :use callback을 활용하려 함수의 동일한 인스턴스를 유지

  //2개의 인수
  // 첫 번째: 콜 백 함수
  // 두 번째: 새로운 함수를 등록하기 위한 의존성 배열
  const handleCountClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h3>UseCallback</h3>
      <p>Count: {count}</p>
      <Button handleClick={handleCountClick} />
      <p>
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>
    </div>
  )
}

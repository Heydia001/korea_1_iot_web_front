import React from 'react'

/*
! React 이벤트 핸들러 (handle: 다루다)
: 사용자와의 상호 작용을 처리하기 위한 함수
 - UI(사용자 인터페이스)에서 발생하는 이벤트에 반응하여
, 동작뇌는 기능을 정의
*/

//# 이벤트 핸들러 예시
// 버튼 클릭 시 >> console창에 버튼을 클릭하였습니다. > 출력

//# 이벤트 핸들러 데이터 전달
interface ConsoleProps {
  message: string;
  children: React.ReactNode;
}

//자식 컴포넌트
// >> 부모 컴포넌트에서 속성으로 문자열 message의 값과
//    해당 컴포넌트 태그들 사이에 내용을 전달 받음.
function ConsoleButton({ message, children } : ConsoleProps ) {
  return (
    <button onClick={() => {
      console.log(`${message}`);
    }}>{children}
    </button>
  )
}

function Handler01() {
  function handleButtonClick() {
    console.log('버튼 클릭1');
  }

  return (
    <div>
      {/*Button 요소에 이벤트 등록
      >> props 속성으로 이벤트 '전달
      >> on 속성으로 작용 - 속성에 중괄호 내에 JS기능을 명시 (이벤트 핸들러)
      */} 
        <button onClick={handleButtonClick}>클릭1</button>

        <button onClick={function() {
          console.log('버튼 클릭2');
        }}>클릭2</button>

        <button onClick={() => 
          console.log('버튼 클릭3')
        }>클릭3</button>

        
        {/* 핸들러에 데이터 전달 */}
        <ConsoleButton message='A를 동작'>
          {/* React Node를 전달 할 경우 HTML요소의 '내용' 전달 가능 */}
          A를 동작시키는 버튼
        </ConsoleButton>
        
        <ConsoleButton message='B를 동작'>
          B를 동작시키는 버튼
        </ConsoleButton>

    </div>
  )
}

export default Handler01
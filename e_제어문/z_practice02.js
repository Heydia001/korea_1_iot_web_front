// z_practice02.js


while (true) {

  //! 구구단 출력기
  // - 사용자로부터  1에서 9사이의 숫자를 입력받기
  // - 입력받는 수단 prompt 창 

  // 입력받은 데이터 값을 숫자 자료형으로 변환 (Number())
  //- 숫자로 변환 한 해당값이 1에서 9사이의 수가 아닌 경우
  // , 콘솔창에 안내 메시지를  출력

  // - 1에서 9 사이의 수인 경우
  // 1에서 9를 반복하여 빈복한 숫자와
  //입력된 수를 곱셈하여 출력

  // const number = Number(prompt('출력할 구구단의 숫자를 입력하시오'));
  const input = (prompt('출력할 구구단의 숫자를 입력하시오 // "exit"를 입력하시면 종료됩니다.'));
if(input.toLowerCase() === 'exit'){
  console.log('프로그램을 종료합니다.');

  //? while문의 무한 루프의 경우  break; 키워드를 만나면 종료
  break;
}

const number = Number(input);
  if (number >= 1 && number <=9){ //number: *N단* 1 ~ 9
    for (let i = 1; i <= 9; i++){
      console.log(`====${number}단====`);
      console.log(`${number} X ${i} = ${number * i}`);
    }
  } else {
    console.log(`1에서 9사이의 숫자를 입력해 주세요.`);
  }
}

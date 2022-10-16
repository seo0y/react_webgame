import React, { useState, useRef } from "react";

const Gugudan = () => {
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9)); // 1~9
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
  const [inputValue, setInputValue] = useState(""); // input에 입력한 값
  const [result, setResult] = useState(""); // 결과
  const inputRef = useRef(null); //null로 초기화

  // useRef는 DOM을 선택할때 사용: 값이 바뀌어도 화면에 영향을 주지 않음, 리액트컴포넌트에서는 상태를 비꾸는 함수를 호출하고 화면을 다시 그리는데, 이때 useRef는 화면을 다시 그리지 않음 (성능 최적화)

  const [values, setValues] = useState("");
  const onChangeInput = (e) => {
    // input에 입력할때마다 실행
    setInputValue(e.target.value); // input에 입력한 값을 inputValue에 저장
  };

  const onSubmitForm = (e) => {
    // form에 onSubmit 이벤트가 발생하면 실행
    e.preventDefault(); // form의 기본 동작을 막음: 새로고침 방지 (이벤트 버블링) 이게 없으면 새로고침됨
    if (parseInt(inputValue) === firstNum * secondNum) {
      setResult("정답: " + inputValue);
      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setInputValue(""); // 정답을 맞추면 input에 입력한 값 초기화
      inputRef.current.focus(); // input에 포커스, 화면에 영향을 주지 않음
      console.log(inputRef.current); // inputRef.current는 input DOM을 가리킴
    } else {
      setResult("땡");
      setInputValue(""); //틀리면 input에 입력한 값 초기화
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        {firstNum}곱하기{secondNum}는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          type="number" // 숫자만 입력할 수 있도록
          value={inputValue} // input에 입력한 값
          onChange={onChangeInput} // input에 입력할때마다 실행
          ref={inputRef} // inputRef를 input에 연결
        />
        <button>입력!!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

export default Gugudan;

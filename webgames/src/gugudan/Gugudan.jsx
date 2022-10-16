import React, { useState } from "react";

const Gugudan = () => {
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  return <div>Gugudan</div>;
};

export default Gugudan;

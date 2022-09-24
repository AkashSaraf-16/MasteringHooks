import React, { useState } from 'react';

const useCounter = (initValue) => {
  const [count, setCount] = useState(initValue);
  const add = () => setCount((v) => v + 1);
  const sub = () => setCount((v) => v - 1);

  return [count, add, sub]; // destructuring const [....]
  // return {count, add, sub};  // destructuring const {....}
};

export default useCounter;

import React, { useState, useEffect } from 'react';
const arw = (value) => value + 1;
const arw1 = (value) => 'this is effect in action';
const Effect = () => {
  const [counter, setCounter] = useState('.');

  useEffect(() => {
    setTimeout(() => {
      setCounter(arw1);
    }, 1000);
  }, [counter]);
  function handler() {
    setCounter(arw);
  }
  return <h1 onClick={handler}>{counter}</h1>;
};

export default Effect;

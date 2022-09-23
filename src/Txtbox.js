import React, { useState, useEffect, useRef } from 'react';

const Txtbox = () => {
  const [inp, setInp] = useState('');
  const inputRef = useRef('');
  useEffect(() => {
    console.log(inp);
  }, [inputRef]);
  function handler() {
    setInp(inputRef.current.value);
  }
  return (
    <div>
      <label>Enter the Text: </label>
      <input type="text" ref={inputRef} onChange={handler} />
    </div>
  );
};

export default Txtbox;

import React, { useContext } from 'react';
import GrandChild from './GrandChild.js';
import Context from './Store.js';
const Child = () => {
  const { state, dispatch } = useContext(Context);
  const background = state.theme === 'dark' ? 'black' : 'orange';
  const color = state.theme === 'dark' ? 'white' : 'black';

  return (
    <div style={{ background, color }}>
      <h2>I am Child - </h2>
      <GrandChild />
    </div>
  );
};

export default Child;

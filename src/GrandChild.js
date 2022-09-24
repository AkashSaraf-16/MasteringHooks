import React, { useContext } from 'react';
import Context from './Store.js';
const GrandChild = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h3>I am GrandChild -</h3>
      <p
        onClick={() => {
          if (state.theme === 'dark') {
            dispatch({ type: 'LIGHT_THEME' });
          } else {
            dispatch({ type: 'DARK_THEME' });
          }
        }}
      >
        Mode:
        {state.theme}
      </p>
    </div>
  );
};

export default GrandChild;

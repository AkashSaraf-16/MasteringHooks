import React, { useReducer } from 'react';
import './style.css';
import Effect from './Effect.js'; // germane to useState and useEffect
import AsnycE from './AsyncE.js'; // germane to async useEffect
import Txtbox from './Txtbox.js'; // germane to useRef
import Stepcounter from './Stepcounter.js'; // germane to useReducer
import Expensive from './Expensive.js'; // germane to useMemo
import Callback from './Callback.js'; // germane to useCallback
import Context from './Store.js'; // germane to useContext
import Child from './Child.js'; // germane to useContext
import useCounter from './useCounter'; // germane to custom hooks
function reducer(state, action) {
  switch (action.type) {
    case 'DARK_THEME':
      return {
        ...state,
        theme: 'dark',
      };
    case 'LIGHT_THEME':
      return {
        ...state,
        theme: 'light',
      };
  }
}

export default function App() {
  const [cnt, add, sub] = useCounter(10);
  const [state, dispatch] = useReducer(reducer, {
    theme: 'dark',
  });
  return (
    <div>
      <Callback />
      {/* <Context.Provider value={{ state, dispatch }}>
        <h1> Revision of hooks</h1>
        <Child />
      </Context.Provider>
      <p>Custom Hook(useCounter):{cnt}</p>
      <button onClick={() => add()}>+</button>{' '}
      <button onClick={() => sub()}>-</button> */}
    </div>
  );
}

import React from 'react';
import './style.css';
import Effect from './Effect.js'; // germane to useState and useEffect
import AsnycE from './AsyncE.js'; // germane to async useEffect
import Txtbox from './Txtbox.js'; // germane to useRef
import Stepcounter from './Stepcounter.js'; // germane to useReducer
import Expensive from './Expensive.js'; // germane to useMemo
import Callback from './Callback.js'; // germane to useCallback
export default function App() {
  return (
    <div>
      <h1> Revision of hooks</h1>
      <Callback />
    </div>
  );
}

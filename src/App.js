import React from 'react';
import './style.css';
import Effect from './Effect.js'; // germane to useEffect
import AsnycE from './AsyncE.js'; // germane to asynce useEffect
import Txtbox from './Txtbox.js'; // germane to useRef
import Stepcounter from './Stepcounter.js'; // germane to useReducer
import Expensive from './Expensive.js'; // germane to useMemo
export default function App() {
  return (
    <div>
      <h1> Revision of hooks</h1>
      <Expensive />
    </div>
  );
}

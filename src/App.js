import React from 'react';
import './style.css';
import Effect from './Effect.js'; // germane to useEffect
import AsnycE from './AsyncE.js'; // germane to asynce useEffect
import Txtbox from './Txtbox.js'; // germane to useRef
import Stepcounter from './Stepcounter.js'; // // germane to useReducer
export default function App() {
  return (
    <div>
      <h1> Revision of hooks</h1>
      <Stepcounter />
    </div>
  );
}

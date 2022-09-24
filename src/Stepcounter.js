// USECASES:
// 1) to bundle up all the states in a single pkg of state
// 2) to manage comlpex states
import React, { useState, useReducer } from 'react';
const incFunc = () => {};
const reducerFunc1 = () => {
  return `Simple reducer in action`;
};
const reducerFunc2 = (state, step) => {
  return state + step;
};
const reducerFunc3 = (state, action) => {
  // state(it is the current state)-> counter,step
  // action-> type,payload
  switch (action.type) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter + state.step,
      };
    case 'INC_STEP':
      return {
        ...state,
        step: state.step + action.paylod,
      };
    default: {
      throw new Error('Not a valid action');
    }
  }
};
const Stepcounter = () => {
  // 1) SIMPLE EXAMPLE OF USEREDUCER:
  // Flow:
  // 1) we have a state
  // 2) when we update state via setState
  // 3) it will asyncronously call reducer function
  // const [state1, setState1] = useReducer(reducerFunc1, 'initvalue');

  // return (
  //   <div>
  //     <h2 onClick={() => setState1()}>Count:{state1}</h2>
  //   </div>
  // );
  //------------------------------------------------------------------
  // 2) UNDERSTANDING ALL THE ARGS OF USEREDUCER
  // const step = 5;
  // const [state2, setState2] = useReducer(reducerFunc2, 0);

  // return (
  //   <div>
  //     <h2 onClick={() => setState2(step)}>Count:{state2}</h2>
  //   </div>
  // );
  //------------------------------------------------------------------
  // 3)  MOVING FURTHER TOWARDS DISPATCHER
  const [state, dispatcher] = useReducer(reducerFunc3, {
    counter: 0,
    step: 1,
  });
  function incCounter() {
    dispatcher({
      type: 'INC_COUNTER',
    });
  }
  function incStep() {
    dispatcher({
      type: 'INC_STEP',
      paylod: 5,
    });
  }
  return (
    <div>
      <h2 onClick={incCounter}>Counter:{state.counter}</h2>
      <h2 onClick={incStep}>Step:{state.step}</h2>
    </div>
  );
};

export default Stepcounter;

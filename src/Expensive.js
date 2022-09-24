// USECASE of useMemo:
//1)  computationally expensivee
//2) 	you want to save the value of state(it can be anything ..object too)->since in useEffect whenever states are re-rendered the reference of the object is changed, to avoid this we can use useMemo
//3) to preserve the referntial values
import React, { useEffect, useState, useMemo } from 'react';

const Expensive = function () {
  // const [random, setRandom] = useState(0);

  // const obj = {
  //   value: 1,
  // };
  // useEffect(() => {
  //   console.log(
  //     "useEffect will always be executed since obj's reference is changed "
  //   );
  // }, [obj]);
  // console.log('State is re-rendered');
  // useMemo(() => {
  //   console.log('inside the useMemo');
  //   return {};
  // }, []);
  // To prevent the above rerender we can do this:
  const [random, setRandom] = useState(0);

  const dependencies = 1;
  const obj = useMemo(() => {
    console.log('inside the useMemo');
    return { value: 1 };
  }, [dependencies]);
  useEffect(() => {
    console.log(
      'useEffect will not run since we saved the reference of object via useMemo '
    );
  }, [obj]);
  console.log('State is re-rendered');

  return (
    <h2
      onClick={() => {
        setRandom(Math.random());
      }}
    >
      State:{random}
    </h2>
  );
};

export default Expensive;

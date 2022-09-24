// useCallback : it is a special case of useMemo where we memoize the function itslef
// Below is useCallback is equvalent of useCallback
import React, { useState, useCallback, useMemo } from 'react';

const Callback = () => {
  const obj1 = useMemo(() => {
    console.log('inside Memo');
    return () => <p>Memoized p tag by useMemo</p>;
  }, []);

  const obj2 = useCallback(() => {
    console.log('inside Callback');
    return <p>Memoized p tag by useCallback</p>;
  }, []);

  return (
    <>
      <h1>useMemo: {obj1()}</h1>
      <h1>useCallback: {obj2()}</h1>
    </>
  );
};

export default Callback;

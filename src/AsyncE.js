import React, { useState, useEffect } from 'react';

function AsnycE() {
  const [data, setData] = useState('');

  // Best Practices:
  useEffect(() => {
    async function fetcher() {
      const p = await fetch('https://jsonplaceholder.typicode.com/todos/1');

      const info = await p.json();
      console.log(p);
      setData(info.title);
    }
    fetcher();
  }, []);
  // Better Practise:
  // useEffect(() => {
  //   async function fetcher() {
  //     const p = await fetch(
  //       'https://jsonplaceholder.typicode.com/todos/1'
  //     ).then((data) => data.json());
  //     setData(p.title);
  //   }
  //   fetcher();
  // }, []);
  // Bad Practise:
  // useEffect(async () => {
  //   const inf = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos/1'
  //   ).then((data) => data.json());
  //   console.log(inf);
  //   setData(inf.title);
  // }, []);
  return <h1>{data}</h1>;
}

export default AsnycE;

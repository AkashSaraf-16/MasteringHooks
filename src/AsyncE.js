import React, { useState, useEffect } from 'react';

function AsnycE() {
  const [data, setData] = useState('');

  // Best Practices:
  useEffect(() => {
    async function fetcher() {
      const info = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      ).then((d) => d.json());
      setData(info.title);
    }
    fetcher();
  }, []);
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

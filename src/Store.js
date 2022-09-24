import React, { useContext, createContext } from 'react';
// Steps to create context:
// 1) Create a store like this and create a comtext in it.
// 2) Put the <Context.Provider> in the appropriate parent like in this i put in App.js
// 3) Provide the value to the context
// 4) Now import this Context wherever you need it for eg in here i have imported it to Child n GrandChild components
// 5) with the help of useContext provide the context in it and use the value....
const Context = createContext(null);

export default Context;

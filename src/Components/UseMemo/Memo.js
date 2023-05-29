import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementedValue = (val) => {
    console.log("incrementing...")
    for (let index = 0; index < 1000000000; index++) {
      val = val + 1;
    }
    return val;
  };

  // useMemo(calcuateValue, dependencies)
  /* 
  - calculating the value that you want to cache
  - it should be pure, should take no arguments, and should return a value of any type
  - React will call your function during initial render.
  - on next render, React will return same value again if the dependencies have not changed since the last render.


  dependencies:-
  - The list of reactive values referenced inside of the calculateValue code.

  RETURNS:-

  On the initial render, useMemo returns the result of calling calculateValue with no arguments.


  // In Strict Mode,
  React wil call your calculation function twice in order to help you find accidental impurities.


  USES:-

  - skiping expensive recalculations
  - On the initial render, the value you'all get from useMemo will be the result of calling  your calculation
  - On every subsequent render, React will compare the dependencies with the dependencies you passed during the last render, if none of the dependencies have changed (compared with Object.is), 


  USEMEMO as performance optimization



  // Optimizaing with useMemo is only valuable in a few cases:

  1. The calculation you're putting in useMemo is noticeably slow, and its dependencies rarely change.
  2. You passed its as

  */
  

  const cacheValue =  useMemo(() => incrementedValue(count), [count])

  const increment = () => {
    setCount(count + 1)
  }

  const addTodo = () => {
    setTodos([...todos, "New Added"])
  }

  return (
    <div>
      {todos.map((todo, index) => <p key={index}>{todo}</p>)}
      <button onClick={addTodo}>Add Todo</button>
      <h1>Value: {cacheValue}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Memo;

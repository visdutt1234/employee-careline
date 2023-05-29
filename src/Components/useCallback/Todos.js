import React, { useCallback, useMemo, useState } from "react";
import Button from "./Button";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleCounter = (counter) => {
    console.log(1, "counter")
    let result = 0;
    for (let index = 0; index < 1000000000; index++) {
      result = counter + index;      
    }
    return result;
  }

  let cacheResult = useMemo(() => handleCounter(counter), [counter]);

  const addTodos = useCallback((id, text) => {
    const newTodo = { id: id, text: text };
    setTodos((todos) => [...todos, newTodo]);
    console.log(id, text);
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
        <p>Counter: {cacheResult}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <Button todoHandler={addTodos} />
      </ul>
    </div>
  );
};

export default Todos;
 
import React, { useEffect } from "react";

function Todos({todos}) {
    useEffect(() => {
        console.log("useEff todos")
    }, [])
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default Todos;

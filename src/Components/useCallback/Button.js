import React, { memo, useEffect, useRef, useState } from "react";

function Button({ todoHandler }) {
  // const [id, setId] = useState(0)
  const previewsProps =  useRef();

  useEffect(() => {
    previewsProps.current = todoHandler
  }, [])

  console.log(previewsProps === todoHandler, "ISEQUAL")
  const addHandler = () => {
    // const idx = id + 1;
    // setId(idx)
    todoHandler(1, "vishnu");
  };

  console.log("re-render", "Button");
  return <button onClick={() => addHandler()}>Add Daily Todo</button>;
}

export default memo(Button);

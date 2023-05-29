import React, { forwardRef, useState } from 'react';

const AddTask = forwardRef(({addHandler}, ref) => {
  const [text, setText] = useState('');

  const changeHandler = (e) => {
        setText(e.target.value);
  }
  const addTaskHandler = () => {
    setText('')
    addHandler(text);
  }


  console.log("Re-render AddTask")
  
  return (
    <div>
        <input ref={ref} type='text' value={text} placeholder='add task' onChange={(e) => changeHandler(e)}/>
        <button onClick={addTaskHandler}>Add</button>
    </div>
  )
})

export default AddTask
import React, {
  useReducer, useRef, useState,
} from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Login from "./Login";

let nextId = 3;
const initialTask = [
  { id: 0, text: "Today Learn React", done: true },
  { id: 1, text: "want to go in merriage", done: false },
  { id: 2, text: "want to meet Krishna", done: false },
];

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "update": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return tasks.filter((t) => {
        if (t.id !== action.id) {
          return t;
        }
      });
    }
    default: {
      throw Error("Unknown Action!");
    }
  }
};

function Index() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const ref =  useRef(0);
  const numRef = useRef(120);
  const inputRef = useRef(null)
  

  const addHandler = (text) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };

  const updateHandler = (task) => {
    dispatch({
      type: "update",
      task: task,
    });
  };

  const deleteHandler = (taskId) => {
    dispatch({
      type: "delete",
      id: taskId,
    });
  };

  
  console.log(nextId, "User Index")

  const handleClickStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setNow(Date.now());
      console.log("YKKDDD")
    }, 10)

    console.log(ref.current, "===============================================================================")
  }

  const handleStop = () => {
    clearInterval(ref.current);
  }
  
  let secondsPassed = 0;

  if(startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleInput = () => {
    inputRef.current.focus();
    console.log(inputRef.current)
  }
  
  numRef.current =  9999;
  return (
    <div>
      <h1>{numRef.current}</h1>
      <AddTask addHandler={addHandler} ref={inputRef}/>
      <TaskList
        tasks={tasks}
        updateTask={updateHandler}
        deleteTask={deleteHandler}
      />
      <Login/>
      <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={(e) => handleClickStart(e)}>start</button>
      <button onClick={(e) => handleStop(e)}>end</button>
      <button onClick={(e) => handleInput(e)}>Input select</button>
    </div>
  );
}

export default Index;

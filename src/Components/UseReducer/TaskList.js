import React, { useState } from "react";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} updateTask={updateTask} deleteTask={deleteTask} />
        </li>
      ))}
    </>
  );
}

function Task({ task, updateTask, deleteTask }) {
  const [isEdit, setIsEdit] = useState(false);

  const updateHandler = (e, task) => {
    updateTask({
      ...task,
      text: e.target.value,
    });
  };

  const updateCheckBoxHandler = (e, task) => {
    updateTask({
      ...task,
      done: e.target.checked,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => updateCheckBoxHandler(e, task)}
      />
      {isEdit ? (
        <>
          <input
            type="text"
            value={task.text}
            onChange={(e) => updateHandler(e, task)}
          />
          <button onClick={() => setIsEdit(false)}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEdit(true)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default TaskList;

import React, { useReducer } from "react";

function createInitialzer(username) {
  console.log("createIn========")
  const initialTodos = [];
  for (let index = 0; index < 50; index++) {
    initialTodos.push({
      id: index,
      text: username + "'s task #" + (index + 1),
    });
  }

  return {
    draft: "Please enter",
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch(action.type) {
    case "changed_draft" : {
        return  {
            draft: action.nextDraft,
            todos: state.todos
        }
    }
    case "added_todo" : {
        return  {
            draft: '',
            todos: [
                {
                    id: state.todos.length,
                    text: state.draft,
                },
                ...state.todos
            ]
        }
    }
  }
}

function CreateInitialzer({ username }) {
  const [state, dispatch] = useReducer(reducer, username, createInitialzer);

  return (
    <div>
      <h1>Create Initial Task</h1>
      <input value={state.draft} onChange={e => {
        dispatch({
            type: "changed_draft",
            nextDraft: e.target.value
        })        
      }}/>
      <button onClick={() => {
        dispatch({
            type: "added_todo"
        })
      }}>Add</button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CreateInitialzer;

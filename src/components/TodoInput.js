import React, { useState } from "react";
import TodoUl from "./TodoUl";
// import { GlobalContext } from "../context/GlobalState";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  //   const { addTodo } = useContext(GlobalContext);

  const addTodo = () => {
    if (input === "" || input === null) {
      return;
    } else {
      const todoObject = {
        id: Date.now(),
        todo: input,
      };
      arr.push(todoObject);

      console.log(arr);
    }
    setInput("");
  };

  const clearAllTodos = () => {
    setArr([]);
  };
  return (
    <>
      <div className="flex-row">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="todoInput"
          type="text"
          placeholder="Add Todo ... "
        />
        <div className="update-div">
          <div>
            <button onClick={addTodo} id="submitBtn">
              Add Todo
            </button>
          </div>
          <div>
            <button onClick={clearAllTodos} id="clearBtn">
              Clear All
            </button>
          </div>
        </div>
      </div>
      <TodoUl input={input} arr={arr} />
    </>
  );
};

export default TodoInput;

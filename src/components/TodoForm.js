import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Date.now(),
      text: input,
    });
    setInput("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          type="text"
          placeholder="add todo"
          onChange={inputHandler}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default TodoForm;

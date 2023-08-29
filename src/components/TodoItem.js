import React, { useEffect, useState } from "react";

const TodoItem = ({ id, text, arr }) => {
  const [newArr, setNewArr] = useState([]);
  const updateTodo = (id) => {
    console.log(arr);
  };

  const deleteTodo = (id) => {
    const removeTodo = [...arr].filter((item) => item.id !== id);
  };

  return (
    <>
      <li className="todo-item" id={id}>
        <div>{text}</div>
        <div>
          <span className="updateBtn" onClick={updateTodo({ id })}>
            Update
          </span>
          <span className="deleteBtn" onClick={deleteTodo({ id })}>
            Delete
          </span>
        </div>
      </li>
    </>
  );
};

export default TodoItem;

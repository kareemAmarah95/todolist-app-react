import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoUl = ({ arr }) => {
  const [todos, setTodos] = useState(arr);
  const [id, todo] = arr;

  return (
    <>
      <ul>
        {arr.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.todo}
            arr={arr}
          ></TodoItem>
        ))}
      </ul>
    </>
  );
};

export default TodoUl;

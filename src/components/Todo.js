import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <div key={todo.id}>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
            <TiEdit onClick={() => setEdit({ id: todo.id, text: todo.text })} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const todosArr = [todo, ...todos];
    setTodos(todosArr);
  };

  const deleteTodo = (id) => {
    const removedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removedTodo);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prevState) =>
      prevState.map((item) => (item.id === id ? newValue : item))
    );
  };
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </>
  );
};

export default TodoList;

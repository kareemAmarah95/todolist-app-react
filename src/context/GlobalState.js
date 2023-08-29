import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  todos: [
    {
      id: Date.now(),
      text: "Task 1",
    },
  ],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function addTodo(todos) {
    dispatch({
      type: "ADD_TODO",
      payload: todos,
    });
  }

  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }

  function updateTodo(id) {
    dispatch({
      type: "UPDATE_TODO",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

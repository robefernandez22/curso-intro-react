import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const { items, saveItem, loading, error } = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = items.filter((t) => t.completed).length;

  let searchedTodos = items;
  if (searchValue.length > 0) {
    searchedTodos = items.filter((t) =>
      t.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const newTodos = [...items];

  const completeTodo = (text) => {
    const todoIndex = items.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = items.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        items,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

<TodoContext.Consumer></TodoContext.Consumer>;

export { TodoContext, TodoProvider };

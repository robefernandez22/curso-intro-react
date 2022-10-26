import React, { useState } from "react";
import { useLocalStorage } from "../../CustomHooks/useLocalStorage";
import { AppUI } from "./AppUI";

export default function App() {
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
    <AppUI
      loading={loading}
      error={error}
      todos={items}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

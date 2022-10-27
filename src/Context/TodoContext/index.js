import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const { items, saveItem, loading, error } = useLocalStorage("todos", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = items.filter((t) => t.completed).length;

  let searchedTodos = items;
  if (searchValue.length > 0) {
    searchedTodos = items.filter((t) =>
      t.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const newTodos = [...items];

  const addTodo = (text) => {
    newTodos.push({
      text,
      completed: false,
    });
    saveItem(newTodos);
  };

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
        items,
        loading,
        error,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        completedTodos,
        searchedTodos,
        addTodo,
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

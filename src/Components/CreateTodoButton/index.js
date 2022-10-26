import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ todos, setTodos }) {
  const onClickButton = () => {
    todos.push({
      text: "Nuevo todo",
      completed: false,
    });
    setTodos(todos);
  };

  return (
    <button className="create-todo-button" onClick={onClickButton}>
      +
    </button>
  );
}

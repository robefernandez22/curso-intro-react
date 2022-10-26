import React from "react";
import "./TodoCounter.css";

export function TodoCounter({ completedTodos, allTodos }) {
  return (
    <h2 className="todo-counter">
      Has completado {completedTodos} de {allTodos} tareas
    </h2>
  );
}

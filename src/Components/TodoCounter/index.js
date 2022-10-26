import React from "react";
import "./TodoCounter.css";

export function TodoCounter({ completedTodos, items }) {
  return (
    <h2 className="todo-counter">
      Has completado {completedTodos} de {items.length} tareas
    </h2>
  );
}

import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoCounter.css";

export function TodoCounter() {
  const { completedTodos, items } = useContext(TodoContext);

  return (
    <h2 className="todo-counter">
      Has completado {completedTodos} de {items.length} tareas
    </h2>
  );
}

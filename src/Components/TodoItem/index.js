import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

export function TodoItem({ text, completed, completeTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <CompleteIcon
        completed={completed}
        onComplete={() => {
          completeTodo(text);
        }}
      />
      <p className={`todo-item-p ${completed && "todo-item-p-complete"}`}>
        {text}
      </p>
      <DeleteIcon
        onDelete={() => {
          deleteTodo(text);
        }}
      />
    </li>
  );
}

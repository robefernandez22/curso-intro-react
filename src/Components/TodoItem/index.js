import React from "react";
import "./TodoItem.css";

export function TodoItem(props) {
  const { text, completed, completeTodo, deleteTodo } = props;

  return (
    <li className="todo-item">
      <span
        className={`icon icon-check ${completed && "icon-check--active"}`}
        onClick={() => completeTodo(text)}
      >
        √
      </span>
      <p className={`todo-item-p ${completed && "todo-item-p--complete"}`}>
        {text}
      </p>
      <span className="icon icon-delete" onClick={() => deleteTodo(text)}>
        X
      </span>
    </li>
  );
}

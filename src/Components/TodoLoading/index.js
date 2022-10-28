import React from "react";
import "./TodoLoading.css";

export function TodoLoading() {
  return (
    <div className="loading-todo-container">
      <span className="loading-todo-complete-icon"></span>
      <p className="loading-todo-text">Cargando...</p>
      <span className="loading-todo-delete-icon"></span>
    </div>
  );
}

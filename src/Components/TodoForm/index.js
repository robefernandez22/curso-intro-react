import React, { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoForm.css";

export function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal((prevState) => !prevState);
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="todo-form-button-container">
        <button
          type="button"
          onClick={onCancel}
          className="todo-form-button todo-form-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="todo-form-button todo-form-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

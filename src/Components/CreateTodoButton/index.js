import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="create-todo-button" onClick={onClickButton}>
      +
    </button>
  );
}

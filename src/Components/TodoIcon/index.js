import React from "react";
import { FiXCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import "./TodoIcon.css";

export function TodoIcon({ type, color, onClick }) {
  const iconTypes = {
    check: (color) => (
      <FiCheckCircle className="icon-svg icon-svg-check" color={color} />
    ),
    delete: (color) => (
      <FiXCircle className="icon-svg icon-svg-delete" color={color} />
    ),
  };

  return (
    <span className={`icon-container icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

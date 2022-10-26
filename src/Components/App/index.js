import React from "react";
import { TodoProvider } from "../../Context/TodoContext";
import { AppUI } from "./AppUI";

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

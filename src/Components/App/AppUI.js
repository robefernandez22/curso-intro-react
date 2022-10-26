import React from "react";
import { TodoContext } from "../../Context/TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

export function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter completedTodos={1} items={2} />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {error && <p>Error...</p>}
            {loading && <p>Cargando...</p>}
            {!loading && !searchedTodos.length && (
              <p>Crea tu primer TODO!...</p>
            )}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}

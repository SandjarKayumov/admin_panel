import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoItem.scss";

const TodoListPage = ({ todos }) => {
  return (
    <div className="todos-list__page">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListPage;

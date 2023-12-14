import React from "react";
import TodoItem from "./TodoItem";

export default function TodoBoard(props) {
  return (
    <>
      <h1>Todo List</h1>
      {props.todoList.map((item, idx) => (
        <TodoItem
          item={item}
          key={idx}
          deleteItem={() => props.deleteItem(idx)}
        />
      ))}
    </>
  );
}

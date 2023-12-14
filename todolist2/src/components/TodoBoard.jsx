import React from "react";
import TodoItem from "./TodoItem";

export default function TodoBoard(props) {
  return (
    <>
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

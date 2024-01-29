import React from "react";
import TodoItem2 from "./TodoItem2";

export default function TodoBoard2(props) {
  return (
    <>
      {props.todoList.map((item, idx) => (
        <TodoItem2
          item={item}
          key={idx}
          deleteItem={() => props.deleteItem(idx)}
        />
      ))}
    </>
  );
}

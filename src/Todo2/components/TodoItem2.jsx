import React from "react";

export default function TodoItem2(props) {
  return (
    <div className="todo-item">
      {props.item}
      <button className="todo-deleteButton" onClick={props.deleteItem}>
        삭제
      </button>
    </div>
  );
}

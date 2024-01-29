import React from "react";

export default function TodoItem3({ data, completedTodo, deleteTodo }) {
  return (
    <>
      <div>
        <span>{data.text}</span>
        {!data.completed ? (
          <button onClick={() => completedTodo(data.id)}>완료</button>
        ) : (
          <></>
        )}
        <button onClick={() => deleteTodo(data.id)}>삭제</button>
      </div>
    </>
  );
}

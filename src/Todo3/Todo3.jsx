import React, { useState } from "react";
import TodoItem3 from "./components/TodoItem3";
import { v4 as uuidv4 } from "uuid";

export default function Todo3() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "text") {
      setText(value);
    }
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), text: text, completed: false }]);
    setText("");
  };

  const completedTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      return newTodos.filter((todo) => todo.id !== id);
    });
  };

  console.log(todos);

  return (
    <>
      <h1>투두리스트</h1>
      <form>
        <label>할 일 추가 : </label>
        <input type="text" name="text" value={text} onChange={onChange} />
        <button onClick={addTodo}>추가</button>
      </form>
      <h2>할 일 목록</h2>
      {todos
        .filter((v) => !v.completed)
        .map((todo) => {
          return (
            <TodoItem3
              key={todo.id}
              data={todo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      <h2>완료 목록</h2>
      {todos
        .filter((v) => v.completed)
        .map((todo) => {
          return (
            <TodoItem3
              key={todo.id}
              data={todo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
    </>
  );
}

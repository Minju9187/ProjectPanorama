import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import GlobalStyle from "./GlobalStyle";

//1. 인풋창이 있고 버튼이 있다.
//2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다.

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };

  const deleteItem = (index) => {
    const newTodoList = todoList.filter((item, idx) => idx !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="center">
      <GlobalStyle />
      <main className="container">
        <h1 className="title">Todo List</h1>
        <div className="addContainer">
          <input
            className="addInput"
            value={inputValue}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItem}>추가</button>
        </div>
        <TodoBoard todoList={todoList} deleteItem={deleteItem} />
      </main>
    </div>
  );
}
export default App;

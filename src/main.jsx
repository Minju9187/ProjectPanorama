import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Todo1 from "./Todo1/Todo1.jsx";
import Todo2 from "./Todo2/Todo2.jsx";
import Todo3 from "./Todo3/Todo3.jsx";
import LoginForm from "./LoginForm/LoginForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todo1 /> */}
    {/* <Todo2 /> */}
    {/* <Todo3 /> */}
    <LoginForm />
  </React.StrictMode>
);

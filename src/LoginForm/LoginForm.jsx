import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEamil(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const logIn = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <h1>로그인</h1>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            autoComplete="current-email"
          />
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="current-password"
          />
        </div>
        <button onClick={logIn}>로그인</button>
      </form>
    </>
  );
}

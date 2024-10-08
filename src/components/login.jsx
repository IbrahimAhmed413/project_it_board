import React from 'react';
import '../App.css';
import { useState } from "react";

function Login({ Login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "ibrahim" && password === "chalog") {
      Login(true); // Allow login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
      <>
        <h2>Login Page</h2>
      <form className='formlogin' onSubmit={handleSubmit}>
        <input
          className='inputlogin'
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <br/>
        <input
          className='inputlogin'
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
        <button type="submit" className='button'>Sign In</button>
      </form>
      </>
  );
}

export default Login;

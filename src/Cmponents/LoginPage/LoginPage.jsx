import React, { useState } from "react";
import "./LoginPage.css";

export const LoginPage = ({ onLogin, onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, password);
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && password) {
      onSignUp(username, password);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="submit" type="submit">
        Login
      </button>
      <button className="sighUp" type="button" onClick={handleSignUp}>
        Sign up
      </button>
    </form>
  );
};

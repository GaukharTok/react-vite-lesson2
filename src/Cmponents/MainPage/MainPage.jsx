import React from "react";

export const MainPage = ({ username, onLogout }) => {
  return (
    <div>
      <h1> Welcom to ToDoList APP, {username}!</h1>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

import { useState } from "react";
import "./App.css";
import { Header } from "./Cmponents/Header/Header";
import { LoginPage } from "./Cmponents/LoginPage/LoginPage";
import { MainPage } from "./Cmponents/MainPage/MainPage";
import { Todoapp } from "./Cmponents/Todoapp/Todoapp";
import users from "./assets/userList/userList";
import { UserData } from "./Cmponents/UserData/UserData";
import initialUsers from "./assets/userList/userList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const handleLogin = (name, password) => {
    const user = users.find(
      (user) => user.username === name && user.password === password
    );
    if (user) {
      setUsername(name);
      setIsLoggedIn(true);
    } else {
      alert("Incorrect username or password");
    }
  };

  const handleSignUp = (newUsername, newPassword) => {
    const user = users.find((user) => user.username === newUsername);

    if (user) {
      alert("User already exists");
      return;
    }

    const newUser = { username: newUsername, password: newPassword };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUsername(newUsername);
    setIsLoggedIn(true);
    console.log("User registered:", newUsername);
  };

  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={handleLogout}
      />
      <div className="App">
        {isLoggedIn ? (
          <MainPage username={username} onLogout={handleLogout} />
        ) : (
          <LoginPage onLogin={handleLogin} onSignUp={handleSignUp} />
        )}
        {isLoggedIn && <Todoapp />}
      </div>
    </>
  );
}

export default App;

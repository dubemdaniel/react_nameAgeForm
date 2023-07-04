import { useState } from "react";
// import "./App.css";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [enteredUser, setEnteredUser] = useState([]);

  const onAddUserHandler = (username, userAge) => {
    setEnteredUser((prev) => {
      return [
        ...prev,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList lists={enteredUser} />
    </div>
  );
}

export default App;

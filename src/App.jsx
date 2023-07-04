import { useState } from "react";
import "./App.css";
import AddUser from "./components/User/AddUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AddUser></AddUser>
    </div>
  );
}

export default App;

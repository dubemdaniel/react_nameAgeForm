import React from "react";

import Card from "../UI/Card";

import style from "./AddUser.module.css";

import Button from "../UI/Button";
import { useState } from "react";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (e) => {
    const userName = e.target.value;
    setEnteredUsername(userName);
  };

  const ageChangeHandler = (e) => {
    const age = e.target.value;
    setEnteredAge(age);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Please input your age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

import React from "react";

import Card from "../UI/Card";

import style from "./AddUser.module.css";

import Button from "../UI/Button";
import { useState } from "react";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!enteredUsername.trim() && !enteredAge) {
      setError({
        title: "invalid input",
        errorMessage: "please input a valid name and age",
      });
      return false;
    }
    if (+enteredAge <= 0) {
      setError({
        title: "invalid age",
        errorMessage: "please input a valid age",
      });
      return false;
    }
    if (!enteredUsername.trim()) {
      setError({
        title: "No Name",
        errorMessage: "please input username",
      });
      return false;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (e) => {
    const userName = e.target.value;
    setEnteredUsername(userName);
  };

  const ageChangeHandler = (e) => {
    const age = e.target.value;
    setEnteredAge(age);
  };
  const deleteHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.errorMessage}
          onDelete={deleteHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Please input your age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

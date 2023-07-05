import React from "react";
import Card from "./Card";
import Button from "./Button";
import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onDelete} />
      <Card className={style.modal}>
        <header className={style.header}>
          <p>{props.title}</p>
        </header>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.action}>
          <Button onClick={props.onDelete}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;

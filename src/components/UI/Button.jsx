import React from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={"submit"} className={style.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

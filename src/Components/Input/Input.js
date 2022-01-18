import React from "react";

import css from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={css.controller}>
      <input
        id={props.id}
        className={props.id === "search" ? css.search : ""}
        {...props}
        autoComplete="off"
      />
      <label
        htmlFor={props.id}
        className={props.id === "search" ? css.search : ""}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;

import React from "react";

import css from "./Input.module.scss";

const Input = (props) => {
  return (
    <div className={css.controller}>
      <input id={props.id} {...props} />
      <label htmlFor={props.id}> {props.label} </label>
    </div>
  );
};

export default Input;

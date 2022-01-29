import React, { forwardRef } from "react";

import css from "./Input.module.scss";

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${css.controller} ${props.invalid ? css.invalid : ""}`}>
      <input
        id={props.id}
        className={props.id === "search" ? css.search : ""}
        {...props}
        autoComplete="off"
        ref={ref}
      />
      <label
        htmlFor={props.id}
        className={props.id === "search" ? css.search : ""}
      >
        {props.label}
      </label>
    </div>
  );
});

export default Input;

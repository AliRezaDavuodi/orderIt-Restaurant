import React from "react";
import Card from "../Card/Card";

import css from "./Input.module.scss";

const Input = (props) => {
  return (
    <Card className="full">
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
    </Card>
  );
};

export default Input;

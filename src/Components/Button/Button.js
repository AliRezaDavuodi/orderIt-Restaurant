import React from "react";

import css from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={css.btn} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

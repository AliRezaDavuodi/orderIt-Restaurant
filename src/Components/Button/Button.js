import React from "react";

import css from "./Button.module.scss";

const Button = (props) => {
  const buttonClasses = `${css.btn} ${props.searchBtn ? css.searchBtn : ""}`;

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

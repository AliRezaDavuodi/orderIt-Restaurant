import React from "react";

import css from "./button.module.scss";

const Button = (props) => {
  // switch between types of btn
  const buttonClasses = `${css.btn} ${
    props.searchbtn
      ? css.searchBtn
      : props.small
      ? css.small
      : props.full
      ? css.full
      : props.center
      ? css.center
      : ""
  }`;

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

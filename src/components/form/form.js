import React from "react";

import css from "./form.module.scss";

const Form = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={`${css.form} ${props.center ? css.center : ""}`}
      onSubmit={formSubmitHandler}
    >
      {props.children}
    </form>
  );
};

export default Form;

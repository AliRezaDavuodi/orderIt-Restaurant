import React from "react";

import css from "./Form.module.scss";

const Form = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className={css.form} onSubmit={formSubmitHandler}>
      {props.children}
    </form>
  );
};

export default Form;

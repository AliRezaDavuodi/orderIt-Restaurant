import React from "react";

import css from "./Form.module.scss";

import Card from "../Card/Card";

const Form = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="container">
      <form className={css.form} onSubmit={formSubmitHandler}>
        {props.children}
      </form>
    </Card>
  );
};

export default Form;

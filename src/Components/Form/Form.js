import React from "react";
import Card from "../Card/Card";

import css from "./Form.module.scss";

const Form = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="full">
      <form
        className={`${css.form} ${props.center ? css.center : ""}`}
        onSubmit={formSubmitHandler}
      >
        {props.children}
      </form>
    </Card>
  );
};

export default Form;

import React from "react";

import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";

import css from "./Signin.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signin = () => {
  const history = useHistory();

  const signinFormHandler = () => {
    // send request to server for login
  };

  const goToSignupFormHandler = () => {
    history.push("/auth");
  };

  return (
    <div className="fadeIn">
      <Form>
        <Input id="email" label="enter your email" placeholder="email" />
        <Input
          id="password"
          type="password"
          label="enter your password"
          placeholder="pass"
        />

        <div className={css.actions}>
          <Button onClick={signinFormHandler}>Signin</Button>
          <Button onClick={goToSignupFormHandler}>Signup</Button>
        </div>
      </Form>
    </div>
  );
};

export default Signin;

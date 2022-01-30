import React from "react";
import { useHistory } from "react-router-dom";

import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Card from "../Card/Card";

import useInput from "../../Hooks/form-validation/use-input";
import {
  validateEmail,
  validateLength,
} from "../../Hooks/form-validation/helper";

const Signin = () => {
  const history = useHistory();

  const email = useInput(validateEmail);
  const password = useInput(validateLength);
  const formIsValid = email.formIsValid && password.formIsValid;

  const signinFormHandler = (e) => {
    e.preventDefault();

    // send request to server for login
  };

  const goToSignupFormHandler = (e) => {
    e.preventDefault();
    history.push("/auth");
  };

  return (
    <div className="fadeIn">
      <Form center>
        <Input
          id="email"
          label="enter your email"
          placeholder="email"
          onChange={email.inputChangeHandler}
          onBlur={email.inputBlurHandler}
          invalid={email.hasErr ? 1 : 0}
          value={email.enteredValue}
        />
        <Input
          id="password"
          type="password"
          label="enter your password"
          placeholder="pass"
          onChange={password.inputChangeHandler}
          onBlur={password.inputBlurHandler}
          invalid={password.hasErr ? 1 : 0}
          value={password.enteredValue}
        />

        <Card className="btnCard">
          <Button onClick={signinFormHandler} disabled={!formIsValid}>
            Signin
          </Button>
          <Button onClick={goToSignupFormHandler}>Signup</Button>
        </Card>
      </Form>
    </div>
  );
};

export default Signin;

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

  const signinFormHandler = () => {
    // send request to server for login
  };

  const goToSignupFormHandler = () => {
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
          invalid={email.hasErr}
          value={email.enteredValue}
        />
        <Input
          id="password"
          type="password"
          label="enter your password"
          placeholder="pass"
          onChange={password.inputChangeHandler}
          onBlur={password.inputBlurHandler}
          invalid={password.hasErr}
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

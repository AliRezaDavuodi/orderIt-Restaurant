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

const Signup = () => {
  const history = useHistory();

  const email = useInput(validateEmail);
  const password = useInput(validateLength);
  const name = useInput(validateLength);

  const goToSigninFormHandler = () => {
    history.push("/auth/signin");
  };

  const signupFormHandler = () => {
    // send data to the server
  };

  return (
    <div className="fadeIn">
      <Form center>
        <Input
          id="name"
          label="enter your name"
          placeholder="name"
          onChange={name.inputChangeHandler}
          onBlur={name.inputBlurHandler}
          invalid={name.hasErr}
          value={name.enteredValue}
        />
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
          <Button onClick={signupFormHandler}>Signup</Button>
          <Button onClick={goToSigninFormHandler}>Signin</Button>
        </Card>
      </Form>
    </div>
  );
};

export default Signup;

import React, { createRef } from "react";
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

const Signin = (props) => {
  const history = useHistory();

  const inputEmailRef = createRef();
  const inputPasswordRef = createRef();

  const email = useInput(validateEmail);
  const password = useInput(validateLength);
  const formIsValid = email.formIsValid && password.formIsValid;

  const signinFormHandler = (e) => {
    e.preventDefault();

    const signInInformation = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      returnSecureToken: true,
    };

    // send prepared object to the Auth component
    props.send(signInInformation, "signin");
  };

  // switch between signin V signup
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
          ref={inputEmailRef}
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
          ref={inputPasswordRef}
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

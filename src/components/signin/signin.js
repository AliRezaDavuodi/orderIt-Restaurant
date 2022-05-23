import React, { createRef } from "react";
import { Prompt, useHistory } from "react-router-dom";

import Input from "../input/input";
import Form from "../form/form";
import Button from "../button/button";
import Card from "../card/card";

import useInput from "../../hooks/form-validation/use-input";
import {
  validateEmail,
  validateLength,
} from "../../hooks/form-validation/helper";

const Signin = (props) => {
  const history = useHistory();

  const inputEmailRef = createRef();
  const inputPasswordRef = createRef();

  const email = useInput(validateEmail);
  const password = useInput(validateLength);
  const formIsValid = email.formIsValid && password.formIsValid;
  const formIsTouched = email.IsTouched || password.IsTouched;

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
    <>
      {formIsTouched && (
        <Prompt
          when={!formIsValid}
          message="Are you sure you want to leave? you lost all your data"
        />
      )}
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
            err={email.hasErr ? 1 : undefined}
            message="email is invalid (includes @ & . )"
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
            err={password.hasErr ? 1 : undefined}
            message="length should be grather than 5 "
          />

          <Card className="btnCard">
            <Button onClick={signinFormHandler} disabled={!formIsValid}>
              Signin
            </Button>
          </Card>
          <button className="link" onClick={goToSignupFormHandler}>
            create account
          </button>
        </Form>
      </div>
    </>
  );
};

export default Signin;

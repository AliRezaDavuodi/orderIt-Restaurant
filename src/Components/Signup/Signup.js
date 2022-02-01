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

const Signup = (props) => {
  const history = useHistory();

  const inputNameRef = createRef();
  const inputEmailRef = createRef();
  const inputPasswordRef = createRef();

  const email = useInput(validateEmail);
  const password = useInput(validateLength);
  const name = useInput(validateLength);
  const formIsValid =
    email.formIsValid && password.formIsValid && name.formIsValid;

  const goToSigninFormHandler = (e) => {
    e.preventDefault();

    // switch between signin V signup
    history.push("/auth/signin");
  };

  const signupFormHandler = (e) => {
    e.preventDefault();

    // get user information from inputs
    const userInformation = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
      returnSecureToken: true,
    };

    // sending prepared data to Auth component
    localStorage.setItem("name", inputNameRef.current.value);
    props.send(userInformation);
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
          invalid={name.hasErr ? 1 : 0}
          value={name.enteredValue}
          ref={inputNameRef}
        />
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
          <Button onClick={signupFormHandler} disabled={!formIsValid}>
            Signup
          </Button>
          <Button onClick={goToSigninFormHandler}>Signin</Button>
        </Card>
      </Form>
    </div>
  );
};

export default Signup;

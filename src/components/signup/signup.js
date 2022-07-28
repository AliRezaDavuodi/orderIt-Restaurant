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
import { signUp } from "auth/auth-helper"

const Signup = props => {
  const history = useHistory()

  const inputNameRef = createRef()
  const inputEmailRef = createRef()
  const inputPasswordRef = createRef()

  const email = useInput(validateEmail)
  const password = useInput(validateLength)
  const name = useInput(validateLength)
  const formIsValid =
    email.formIsValid && password.formIsValid && name.formIsValid
  const formIsTouched = email.IsTouched || name.IsTouched || password.IsTouched

  const goToSigninFormHandler = e => {
    e.preventDefault()

    // switch between signin V signup
    history.push("/auth/signin")
  }

  const signupFormHandler = async e => {
    e.preventDefault()

    // get user information from inputs
    const userInfo = {
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    }
    // sending the user to the redux
    const res = await signUp(userInfo)

    console.log({ res })
  }

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
            id="name"
            label="enter your name"
            placeholder="name"
            onChange={name.inputChangeHandler}
            onBlur={name.inputBlurHandler}
            invalid={name.hasErr ? 1 : 0}
            value={name.enteredValue}
            ref={inputNameRef}
            err={name.hasErr ? 1 : undefined}
            message="length should be grather than 5 "
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
            <Button onClick={signupFormHandler} disabled={!formIsValid}>
              Signup
            </Button>
          </Card>
          <button className="link" onClick={goToSigninFormHandler}>
            i have an account
          </button>
        </Form>
      </div>
    </>
  )
}

export default Signup;

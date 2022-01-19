import React from "react";

import Input from "../Input/Input";
import Form from "../Form/Form";
import Button from "../Button/Button";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../Card/Card";

const Signup = () => {
  const history = useHistory();

  const goToSigninFormHandler = () => {
    history.push("/auth/signin");
  };

  const signupFormHandler = () => {
    // send data to the server
  };

  return (
    <div className="fadeIn">
      <Form center>
        <Input id="name" label="enter your name" placeholder="name" />
        <Input id="email" label="enter your email" placeholder="email" />
        <Input
          id="password"
          type="password"
          label="enter your password"
          placeholder="pass"
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

import React from "react";

import Input from "../Input/Input";
import Form from "../Form/Form";

const Signup = () => {
  return (
    <Form>
      <Input id="name" label="enter your name" placeholder="name" />
      <Input id="email" label="enter your email" placeholder="email" />
      <Input
        id="password"
        type="password"
        label="enter your password"
        placeholder="pass"
      />
    </Form>
  );
};

export default Signup;

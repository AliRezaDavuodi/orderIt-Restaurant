import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import css from "./Hero.module.scss";

import Button from "../Button/Button";
import { useSelector } from "react-redux";

const Hero = () => {
  const history = useHistory();

  const auth = useSelector((state) => state.auth.token);

  const clickSignupHandler = () => {
    history.push("/auth");
  };
  const clickSigninHandler = () => {
    history.push("/auth/signin");
  };
  const clickOrderHandler = () => {
    history.push("/foods");
  };

  return (
    <header className={css.header}>
      <div className={css.title}>
        <h1>
          Welcome to <br />
          <span>ORDER IT</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, nibh quis posuere tincidunt, quam nunc pulvinar tortor,
          vitae placerat ligula nunc aliquet tortor.
        </p>
      </div>

      <div className={css.actions}>
        {!!auth && <Button onClick={clickOrderHandler}>Let's Order </Button>}
        {!!!auth && <Button onClick={clickSigninHandler}>Signin </Button>}
        {!!!auth && <Button onClick={clickSignupHandler}>Signup </Button>}
      </div>
    </header>
  );
};

export default Hero;

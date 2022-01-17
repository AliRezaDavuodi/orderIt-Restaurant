import React from "react";

import css from "./Hero.module.scss";

import Button from "../Button/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push("/auth");
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
        <Button>Let's Order </Button>
        <Button onClick={clickHandler}>Signup </Button>
      </div>
    </header>
  );
};

export default Hero;

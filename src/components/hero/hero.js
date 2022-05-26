import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Button from "../button/button";
import { useSelector } from "react-redux";

import css from "./hero.module.scss";

const Hero = () => {

  const [userName, setUserName] = useState('')

  const history = useHistory();

  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth; // create a boolean variable

  if(isAuth) {
    const userName = localStorage.getItem("name");
    setUserName(userName)
  }

  const clickHandler = (route) => {
    history.push(route);

  }

  return (
    <header className={css.header}>
      <div className={css.title}>
        {!isAuth && (
          <h1>
            Welcome to <br />
            <span>ORDER IT</span>
          </h1>
        )}
        {isAuth && (
          <h1>
            Welcome <br />
            <span>{userName}</span>
          </h1>
        )}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, nibh quis posuere tincidunt, quam nunc pulvinar tortor,
          vitae placerat ligula nunc aliquet tortor.
        </p>
      </div>

      <div className={css.actions}>
        {isAuth && <Button onClick={clickHandler.bind(null,'/foods')}>Let's Order </Button>}
        {!isAuth && (
          <>
            <Button onClick={clickHandler.bind(null,'/auth/signin')}>Signin </Button>
            <Button onClick={clickHandler.bind(null,'/foods')}>Foods </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Hero;

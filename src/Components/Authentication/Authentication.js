import React from "react";

import humber from "../../assests/hamburg.svg";
import Button from "../Button/Button";
import Signin from "../Signin/Signin";

import Signup from "../Signup/Signup";

import css from "./Authentication.module.scss";

const Authentication = () => {
  return (
    <section className={css.auth}>
      <div className={css.form}>
        <h3 className={css.title}> Signup </h3>
        <Signup />
        {/* <Signin /> */}
        <div className={css.actions}>
          <Button>Signup</Button>
          <Button>Signin</Button>
        </div>
      </div>
      <div className={css.img}>
        <img src={humber} alt="humbergure" />
      </div>
    </section>
  );
};

export default Authentication;

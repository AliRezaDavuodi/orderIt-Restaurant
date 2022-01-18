import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import humber from "../../assests/hamburg.svg";
import Signin from "../Signin/Signin";

import Signup from "../Signup/Signup";

import css from "./Authentication.module.scss";

const Authentication = () => {
  const location = useLocation();

  return (
    <section className={css.auth}>
      <div className={css.form}>
        <h3 className={css.title}> Signup </h3>
        {location.pathname === "/auth" && <Signup />}
        {location.pathname === "/auth/signin" && <Signin />}
      </div>
      <div className={css.img}>
        <img src={humber} alt="humbergure" />
      </div>
    </section>
  );
};

export default Authentication;

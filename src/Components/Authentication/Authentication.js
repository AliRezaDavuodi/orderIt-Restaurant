import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import humber from "../../assests/hamburg.svg";

import useHttpRequest from "../../Hooks/http-request/use-http";

import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { authActions } from "../../store/auth";

import css from "./Authentication.module.scss";

const Authentication = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { request: sendigUserInformation, loading } = useHttpRequest();

  const onSubmitHandler = (userInfo) => {
    // send data to the server
    //conver data
    const convertData = (data) => {
      const loggedInInformation = {
        token: data.idToken,
        expiresIn: +data.expiresIn,
      };

      console.log({
        loggedInInformation,
        data,
      });
      dispatch(authActions.login(loggedInInformation));
    };

    sendigUserInformation(
      {
        url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASJnoIJ35f3ZyTjKHaY9xZnP9TnKVhjaE",
        method: "POST",
        body: userInfo,
        headers: {
          "Content-Type": "application/json",
        },
      },
      convertData
    );
  };

  const formTtitle = location.pathname === "/auth" ? "Signup" : "Signin";

  return (
    <section className={`${css.auth} fadeIn`}>
      {loading && <LoadingSpinner />}
      <div className={css.form}>
        <h3 className="title"> {formTtitle} </h3>
        {location.pathname === "/auth" && <Signup send={onSubmitHandler} />}
        {location.pathname === "/auth/signin" && <Signin />}
      </div>
      <div className={css.img}>
        <img src={humber} alt="humbergure" />
      </div>
    </section>
  );
};

export default Authentication;

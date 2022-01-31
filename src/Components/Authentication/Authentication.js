import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import humber from "../../assests/hamburg.svg";

import useHttpRequest from "../../Hooks/http-request/use-http";

import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { authActions } from "../../store/auth";

import css from "./Authentication.module.scss";

const SIGNUP__URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASJnoIJ35f3ZyTjKHaY9xZnP9TnKVhjaE";

const SIGNIN__URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASJnoIJ35f3ZyTjKHaY9xZnP9TnKVhjaE";

const Authentication = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    request: sendingUserAuthInfoRequest,
    loading,
    data,
  } = useHttpRequest();

  const onSubmitHandler = (userInfo, type = "signup") => {
    // send data to the server
    //conver data
    const convertData = (data) => {
      const loggedInInformation = {
        token: data.idToken,
        expiresIn: +data.expiresIn,
      };

      return loggedInInformation;
    };

    sendingUserAuthInfoRequest(
      {
        url: type === "signup" ? SIGNUP__URL : SIGNIN__URL,
        method: "POST",
        body: userInfo,
        headers: {
          "Content-Type": "application/json",
        },
      },
      convertData
    );
  };

  useEffect(() => {
    if (data) {
      dispatch(authActions.login(data));
    }
  }, [data, dispatch]);

  const formTtitle = location.pathname === "/auth" ? "Signup" : "Signin";

  return (
    <section className={`${css.auth} fadeIn`}>
      {loading && <LoadingSpinner />}
      <div className={css.form}>
        <h3 className="title"> {formTtitle} </h3>
        {location.pathname === "/auth" && <Signup send={onSubmitHandler} />}
        {location.pathname === "/auth/signin" && (
          <Signin send={onSubmitHandler} />
        )}
      </div>
      <div className={css.img}>
        <img src={humber} alt="humbergure" />
      </div>
    </section>
  );
};

export default Authentication;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import humber from "../../assets/hamburg.svg";

import Signin from "../signin/signin";
import Signup from "../signup/signup";
import LoadingSpinner from "../loading-spinner/loading-spinner";

import { authActions } from "../../store/auth";

import useHttpRequest from "../../hooks/http-request/use-http";
import {
  firebaseApiKey,
  firebaseSignin,
  firebaseSignup,
} from "../../hooks/http-request/urls";

import css from "./authentication.module.scss";

import { toast } from "react-toastify";

const SIGNUP__URL = `${firebaseSignup}${firebaseApiKey}`;

const SIGNIN__URL = `${firebaseSignin}${firebaseApiKey}`;

const Authentication = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const [titleForm, setTitleForm] = useState("");

  // use Custom hook
  const {
    request: sendingUserAuthInfoRequest,
    loading,
    data,
    hasError,
  } = useHttpRequest();

  //conver data
  const convertData = (data) => {
    // get needed data form API response
    const loggedInInformation = {
      token: data.idToken,
      expiresIn: +data.expiresIn,
    };

    return loggedInInformation;
  };

  const onSubmitHandler = (userInfo, type = "signup") => {
    // sendig request to the API
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
    let isSubscribed = true;

    if (!isSubscribed) return;

    if (data) {
      // store data about authentication in redux
      toast.success("welcome to ORDER IT ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        dispatch(authActions.login({ ...data }));
        history.push("/");
      }, 2500);
    }

    return (_) => (isSubscribed = false);
  }, [data, dispatch, history]);

  useEffect(() => {
    if (hasError) {
      toast.warning("turn on your VPN and try again", {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      toast.error("something went wrong please try again later", {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [hasError, history]);

  useEffect(() => {
    // change form title for each form
    location.pathname === "/auth"
      ? setTitleForm("Signup")
      : setTitleForm("Signin");
  }, [location]);

  return (
    <section className={`${css.auth} fadeIn`}>
      {loading && <LoadingSpinner />}
      <div className={css.form}>
        <h3 className="title"> {titleForm} </h3>
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

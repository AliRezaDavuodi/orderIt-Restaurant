import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import humber from "../../assests/hamburg.svg";

import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { authActions } from "../../store/auth";

import useHttpRequest from "../../Hooks/http-request/use-http";
import {
  firebaseApiKey,
  firebaseSignin,
  firebaseSignup,
} from "../../Hooks/http-request/urls";

import css from "./Authentication.module.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SIGNUP__URL = `${firebaseSignup}${firebaseApiKey}`;

const SIGNIN__URL = `${firebaseSignin}${firebaseApiKey}`;

const Authentication = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  // use Custom hook
  const {
    request: sendingUserAuthInfoRequest,
    loading,
    data,
  } = useHttpRequest();

  const onSubmitHandler = (userInfo, type = "signup") => {
    //conver data
    const convertData = (data) => {
      // get needed data form API response
      const loggedInInformation = {
        token: data.idToken,
        expiresIn: +data.expiresIn,
      };

      return loggedInInformation;
    };

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
    if (data) {
      // store data about authentication in redux
      dispatch(authActions.login({ ...data }));
      history.push("/");
    }
  }, [data, dispatch, history]);

  // change form title for each form
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

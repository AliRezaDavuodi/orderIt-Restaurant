import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import humber from "../../assets/hamburg.svg"

import Signin from "../signin/signin"
import Signup from "../signup/signup"
import LoadingSpinner from "../loading-spinner/loading-spinner"

import css from "./authentication.module.scss"

import { MetaTags } from "react-meta-tags"

const Authentication = () => {
  const location = useLocation()

  const [titleForm, setTitleForm] = useState("")

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // change form title for each form
    location.pathname === "/auth"
      ? setTitleForm("Signup")
      : setTitleForm("Signin")
  }, [location])

  return (
    <>
      <section className={`${css.auth} fadeIn`}>
        {loading && <LoadingSpinner />}
        <div className={css.form}>
          <h3 className="title"> {titleForm} </h3>
          {location.pathname === "/auth" && (
            <>
              <MetaTags>
                <title> Order It | sign up </title>
              </MetaTags>
              <Signup />
            </>
          )}
          {location.pathname === "/auth/signin" && (
            <>
              <MetaTags>
                <title> Order It | sign in </title>
              </MetaTags>
              <Signin />
            </>
          )}
        </div>
        <div className={css.img}>
          <img src={humber} alt="humbergure" />
        </div>
      </section>
    </>
  )
}

export default Authentication 

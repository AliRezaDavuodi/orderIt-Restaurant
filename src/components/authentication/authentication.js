import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

import humber from "../../assets/hamburg.svg";

import Signin from "../signin/signin";
import Signup from "../signup/signup";
import LoadingSpinner from "../loading-spinner/loading-spinner";

import { authActions } from "../../store/auth";

import css from "./authentication.module.scss"

import SendingRequest from "utilities/send-request-component"
import { notif } from "utilities/toast"
import { MetaTags } from "react-meta-tags"

const Authentication = () => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()

  const [titleForm, setTitleForm] = useState("")
  const [sendRequest, setSendRequest] = useState(false)

  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [data, setData] = useState()
  const [success, setSuccess] = useState(false)

  const [userInfo, setUserInfo] = useState({})
  const [requestSubCategory, setRequestSubCategory] = useState("")

  //conver data
  const convertData = data => {
    // get needed data form API response
    const loggedInInformation = {
      token: data.idToken,
      expiresIn: +data.expiresIn,
    }
    return loggedInInformation
  }

  const onSubmitHandler = (userInfo, type = "signup") => {
    // sending request is allowed
    setUserInfo(userInfo)
    setRequestSubCategory(type)
    setSendRequest(true)
  }

  useEffect(() => {
    let isSubscribed = true

    if (!isSubscribed) return

    if (data && success) {
      // store data about authentication in redux
      const name = localStorage.getItem("name")
      notif("success", `welcome ${name} to ORDER IT`, 1000)

      setTimeout(() => {
        dispatch(authActions.login({ ...data }))
        history.push("/")
      }, 2500)
    }

    if (!data && err && !success) {
      notif("warning", "turn on your VPN and try again", 6000)

      if (err && !success) {
        notif("error", "something went wrong please try again later", 6000)
      }
    }

    return _ => (isSubscribed = false)
  }, [err, success, history, data, dispatch])

  useEffect(() => {
    // change form title for each form
    location.pathname === "/auth"
      ? setTitleForm("Signup")
      : setTitleForm("Signin")
  }, [location])

  return (
    <>
      {sendRequest && (
        <SendingRequest
          category="auth"
          subCategory={requestSubCategory}
          converter={convertData}
          data={userInfo}
          setLoading={setLoading}
          setSendRequest={setSendRequest}
          setErr={setErr}
          setData={setData}
          setSuccess={setSuccess}
        />
      )}

      <section className={`${css.auth} fadeIn`}>
        {loading && <LoadingSpinner />}
        <div className={css.form}>
          <h3 className="title"> {titleForm} </h3>
          {location.pathname === "/auth" && (
            <>
              <MetaTags>
                <title> Order It | sign up </title>
              </MetaTags>
              <Signup send={onSubmitHandler} />{" "}
            </>
          )}
          {location.pathname === "/auth/signin" && (
            <>
              <MetaTags>
                <title> Order It | sign in </title>
              </MetaTags>
              <Signin send={onSubmitHandler} />
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

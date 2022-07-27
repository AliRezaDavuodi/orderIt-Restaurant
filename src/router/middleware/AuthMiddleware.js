import React from "react"
import { Redirect, Route } from "react-router-dom"

const AuthMiddleware = ({
  path,
  component,
  exact,
  isAuthProtected,
  ...rest
}) => {
  const Component = component

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected) {
          return <Redirect to="/" />
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default AuthMiddleware

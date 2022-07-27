import Navigation from "components/navigation/navigation"
import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout

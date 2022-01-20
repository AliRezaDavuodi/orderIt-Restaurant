import React from "react";
import Authentication from "../Components/Authentication/Authentication";
import Navigation from "../Components/Navigation/Navigation";

const Auth = () => {
  return (
    <>
      <Navigation />
      <div className="fadeIn">
        <Authentication />
      </div>
    </>
  );
};

export default Auth;

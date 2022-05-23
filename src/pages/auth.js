import React from "react";
import Authentication from "../components/authentication/authentication";
import Navigation from "../components/navigation/navigation";

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

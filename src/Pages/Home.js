import React from "react";
import Hero from "../Components/Hero/Hero";
import Navigation from "../Components/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="fadeIn">
        <Hero />
      </div>
    </>
  );
};

export default Home;

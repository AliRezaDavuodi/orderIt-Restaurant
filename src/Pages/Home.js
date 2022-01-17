import React from "react";
import Hero from "../Components/Hero/Hero";
import Navigation from "../Components/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation homePage={true} />
      <Hero />
    </div>
  );
};

export default Home;

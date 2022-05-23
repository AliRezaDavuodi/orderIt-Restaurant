import React from "react";
import Hero from "../components/hero/hero";
import Navigation from "../components/navigation/navigation";

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

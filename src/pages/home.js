import React from "react";
import { MetaTags } from "react-meta-tags"
import Hero from "../components/hero/hero"
import Navigation from "../components/navigation/navigation"

const Home = () => {
  return (
    <>
      <MetaTags>
        <title> Order It </title>
      </MetaTags>
      <Navigation />
      <div className="fadeIn">
        <Hero />
      </div>
    </>
  )
}

export default Home;

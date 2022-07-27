import React from "react";
import { MetaTags } from "react-meta-tags"
import Hero from "../components/hero/hero"

const Home = () => {
  return (
    <>
      <MetaTags>
        <title> Order It </title>
      </MetaTags>

      <div className="fadeIn">
        <Hero />
      </div>
    </>
  )
}

export default Home;

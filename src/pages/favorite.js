import React from "react";
import { MetaTags } from "react-meta-tags"
import Card from "../components/card/card"
import FavoditeFoods from "../components/favodite-foods/favodite-foods"
import Navigation from "../components/navigation/navigation"

const Favorite = () => {
  return (
    <>
      <MetaTags>
        <title> Order It | Favorite Cart </title>
      </MetaTags>
      <Navigation />
      <Card className="fadeIn full">
        <Card className="container">
          <FavoditeFoods />
        </Card>
      </Card>
    </>
  )
}

export default Favorite;

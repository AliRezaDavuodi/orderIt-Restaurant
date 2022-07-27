import React from "react";
import { MetaTags } from "react-meta-tags"
import Card from "../components/card/card"
import FavoditeFoods from "../components/favodite-foods/favodite-foods"

const Favorite = () => {
  return (
    <>
      <MetaTags>
        <title> Order It | Favorite Cart </title>
      </MetaTags>
      <Card className="fadeIn full">
        <Card className="container">
          <FavoditeFoods />
        </Card>
      </Card>
    </>
  )
}

export default Favorite;

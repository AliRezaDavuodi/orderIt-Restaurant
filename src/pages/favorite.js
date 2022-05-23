import React from "react";
import Card from "../components/card/card";
import FavoditeFoods from "../components/favodite-foods/favodite-foods";
import Navigation from "../components/navigation/navigation";

const Favorite = () => {
  return (
    <>
      <Navigation />
      <Card className="fadeIn full">
        <Card className="container">
          <FavoditeFoods />
        </Card>
      </Card>
    </>
  );
};

export default Favorite;

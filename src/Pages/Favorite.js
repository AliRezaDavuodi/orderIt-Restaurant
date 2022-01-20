import React from "react";
import Card from "../Components/Card/Card";
import FavoditeFoods from "../Components/FavoditeFoods/FavoditeFoods";
import Navigation from "../Components/Navigation/Navigation";

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

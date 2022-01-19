import React from "react";
import Card from "../Components/Card/Card";
import FavoditeFoods from "../Components/FavoditeFoods/FavoditeFoods";

const Favorite = () => {
  return (
    <Card className="fadeIn full">
      <Card className="container">
        <FavoditeFoods />
      </Card>
    </Card>
  );
};

export default Favorite;

import React from "react";
import Card from "../Components/Card/Card";
import FoodsList from "../Components/FoodsList/FoodsList";
import Navigation from "../Components/Navigation/Navigation";
import SearchFood from "../Components/SearchFood/SearchFood";

const Foods = () => {
  return (
    <>
      <Navigation />
      <Card className="fadeIn full">
        <Card className="container">
          <SearchFood />
          <FoodsList />
        </Card>
      </Card>
    </>
  );
};

export default Foods;

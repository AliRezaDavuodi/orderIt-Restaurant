import React from "react";
import FoodsList from "../Components/FoodsList/FoodsList";
import SearchFood from "../Components/SearchFood/SearchFood";

const Foods = () => {
  return (
    <div>
      <SearchFood />
      <FoodsList />
    </div>
  );
};

export default Foods;

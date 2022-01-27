import React from "react";
import { useSelector } from "react-redux";

import List from "../List/List";

const FoodsList = () => {
  const allFoods = useSelector((state) => state.foods.allFoods);

  return <List foods={allFoods} />;
};

export default FoodsList;

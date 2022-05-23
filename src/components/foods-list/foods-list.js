import React from "react";
import { useSelector } from "react-redux";

import List from "../list/list";
import NotFoundData from "../notFound-data/not-foundData";

const FoodsList = () => {
  const allFoods = useSelector((state) => state.foods.allFoods);

  let content = <NotFoundData>NO Data found please try again</NotFoundData>;

  if (allFoods.length > 0) {
    content = <List foods={allFoods} />;
  }

  return content;
};

export default FoodsList;

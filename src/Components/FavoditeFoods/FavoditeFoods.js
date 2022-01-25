import React from "react";
import { useSelector } from "react-redux";

import List from "../List/List";

const FavoditeFoods = () => {
  const likeFoods = useSelector((state) => state.like.likes);

  let content = <h2> like a food to find it here </h2>;

  if (likeFoods.length > 0) content = <List like="true" foods={likeFoods} />;

  return content;
};

export default FavoditeFoods;

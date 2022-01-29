import React from "react";
import { useSelector } from "react-redux";

import List from "../List/List";
import NotFoundData from "../NotFoundData/NotFoundData";

const FavoditeFoods = () => {
  const likeFoods = useSelector((state) => state.like.likes);

  let content = <NotFoundData> like a food to find it here </NotFoundData>;

  if (likeFoods.length > 0) content = <List like="true" foods={likeFoods} />;

  return content;
};

export default FavoditeFoods;

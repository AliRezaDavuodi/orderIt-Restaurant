import React from "react";
import { useDispatch } from "react-redux";

import Card from "../components/card/card";
import FoodsList from "../components/foods-list/foods-list";
import LoadingSpinner from "../components/loading-spinner/loading-spinner";
import Navigation from "../components/navigation/navigation";
import SearchFood from "../components/search-food/search-food";
import { convertFoodData } from "../hooks/http-request/apis";
import {
  spoonacularApiKey,
  spoonacularGetFood,
} from "../hooks/http-request/urls";
import useHttpRequest from "../hooks/http-request/use-http";
import { foodsActions } from "../store/foods";

const Foods = () => {
  const dispatch = useDispatch();

  const { request: getFoodBySearch, loading } = useHttpRequest();

  const getFoodHandler = (query) => {
    if (query.length === 0) return;

    // convert data
    const TransformData = (data) => {
      const searchedRecipes = convertFoodData(data);
      dispatch(foodsActions.replaceFoods(searchedRecipes));
    };

    // sending request ot the API
    getFoodBySearch(
      {
        url: `${spoonacularGetFood}number=100&tags=${query}${spoonacularApiKey}`,
      },
      TransformData
      
    );
  };

  return (
    <>
      <Navigation />
      {loading && <LoadingSpinner />}
      {!loading && (
        <Card className="fadeIn full">
          <Card className="container">
            <SearchFood getData={getFoodHandler} />
            <FoodsList />
          </Card>
        </Card>
      )}
    </>
  );
};

export default Foods;

import React from "react";
import { useDispatch } from "react-redux";

import Card from "../Components/Card/Card";
import FoodsList from "../Components/FoodsList/FoodsList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Navigation from "../Components/Navigation/Navigation";
import SearchFood from "../Components/SearchFood/SearchFood";
import { convertFoodData } from "../Hooks/http-request/apis";
import {
  spoonacularApiKey,
  spoonacularGetFood,
} from "../Hooks/http-request/urls";
import useHttpRequest from "../Hooks/http-request/use-http";
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

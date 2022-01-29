import React from "react";
import { useDispatch } from "react-redux";

import Card from "../Components/Card/Card";
import FoodsList from "../Components/FoodsList/FoodsList";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Navigation from "../Components/Navigation/Navigation";
import SearchFood from "../Components/SearchFood/SearchFood";
import useHttpRequest from "../Hooks/http-request/use-http";
import { foodsActions } from "../store/foods";

const Foods = () => {
  const dispatch = useDispatch();

  const { request: getFoodBySearch, loading } = useHttpRequest();

  const getFoodHandler = (query) => {
    if (query.length === 0) return;

    const TransformData = (data) => {
      const { recipes } = data;

      const searchedRecipes = [];

      recipes.forEach((recipe) => {
        const dataObj = {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          description: recipe.summary.slice(0, 120) + "...",
          price: recipe.pricePerServing.toFixed(2),
        };

        searchedRecipes.push(dataObj);
      });

      dispatch(foodsActions.replaceFoods(searchedRecipes));
    };

    getFoodBySearch(
      {
        url: `https://api.spoonacular.com/recipes/random?number=100&tags=${query}&apiKey=d305e19b4ada4db5a5c275ed4480c431`,
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

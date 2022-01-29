import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import FoodInfo from "../Components/FoodInfo/FoodInfo";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Navigation from "../Components/Navigation/Navigation";

import useHttpRequest from "../Hooks/http-request/use-http";
import { foodInfoActions } from "../store/foodDetails";

const FoodsDetails = () => {
  const params = useParams();

  // get food's id to display its information
  const { foodID } = params;

  const dispatch = useDispatch();

  // get info object of store
  const foodInfo = useSelector((state) => state.info.info);

  // custom hook to send HTTP request
  const { request: searchToFindFoodById, loading } = useHttpRequest();

  useEffect(() => {
    const tranformData = (data) => {
      // destructuring data object
      const { id, image, instructions, title } = data;

      // create suitable object
      const foodInformation = {
        id,
        image,
        title,
        description: instructions,
      };

      // update food info object
      dispatch(foodInfoActions.replaceFoodInfo(foodInformation));
    };

    // sendig request
    searchToFindFoodById(
      {
        url: `https://api.spoonacular.com/recipes/${foodID}/information?includeNutrition=false&apiKey=d305e19b4ada4db5a5c275ed4480c431`,
      },
      tranformData
    );
  }, [searchToFindFoodById, foodID, dispatch]);

  return (
    <>
      <Navigation />
      <div className="fadeIn">
        {loading && <LoadingSpinner />}
        {!loading && <FoodInfo food={foodInfo} />}
      </div>
    </>
  );
};

export default FoodsDetails;

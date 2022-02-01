import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import Card from "../Components/Card/Card";

import FoodInfo from "../Components/FoodInfo/FoodInfo";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import Navigation from "../Components/Navigation/Navigation";
import NotFoundData from "../Components/NotFoundData/NotFoundData";
import { spoonacularApiKey } from "../Hooks/http-request/urls";

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
  const {
    request: searchToFindFoodById,
    loading,
    data: foodDetail,
  } = useHttpRequest();

  // sending request
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

      return foodInformation;
    };

    // sendig request
    searchToFindFoodById(
      {
        url: `https://api.spoonacular.com/recipes/${foodID}/information?includeNutrition=false${spoonacularApiKey}`,
      },
      tranformData
    );
  }, [searchToFindFoodById, foodID]);

  // set data
  useEffect(() => {
    if (foodDetail) {
      // update food info object
      dispatch(foodInfoActions.replaceFoodInfo(foodDetail));
    }
  }, [foodDetail, dispatch]);

  return (
    <>
      <Navigation />
      {!!!foodDetail && (
        <Card className="container">
          <NotFoundData> NO Data Found Please Try Again </NotFoundData>
        </Card>
      )}
      {!!foodDetail && (
        <div className="fadeIn">
          {loading && <LoadingSpinner />}
          {!loading && <FoodInfo food={foodInfo} />}
        </div>
      )}
    </>
  );
};

export default FoodsDetails;

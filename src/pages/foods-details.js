import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import Card from "../components/card/card";

import FoodInfo from "../components/food-info/food-info";
import LoadingSpinner from "../components/loading-spinner/loading-spinner";
import Navigation from "../components/navigation/navigation";
import NotFoundData from "../components/not-found-data/not-found-data";

import { spoonacularApiKey } from "../hooks/http-request/urls";

import useHttpRequest from "../hooks/http-request/use-http";
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


    let isSubscribed = true

    if(!isSubscribed) return

    
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

      return _ => isSubscribed = false
  }, [searchToFindFoodById, foodID]);

  // set data
  useEffect(() => {

    let isSubscribed = true

    if(!isSubscribed) return

    
    if (foodDetail) {
      // update food info object
      dispatch(foodInfoActions.replaceFoodInfo(foodDetail));
    }
    
    return _ => isSubscribed = false
  }, [foodDetail, dispatch]);

  return (
    <>
      <Navigation />
      {!!!foodDetail && !loading && (
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

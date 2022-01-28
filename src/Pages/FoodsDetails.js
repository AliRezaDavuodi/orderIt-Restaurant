import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import FoodInfo from "../Components/FoodInfo/FoodInfo";
import Navigation from "../Components/Navigation/Navigation";
import useHttpRequest from "../Hooks/http-request/use-http";
import { foodInfoActions } from "../store/foodDetails";

const FoodsDetails = () => {
  const params = useParams();
  const { foodID } = params;

  const dispatch = useDispatch();
  const foodInfo = useSelector((state) => state.info.info);

  const { request: searchToFindFoodById } = useHttpRequest();

  useEffect(() => {
    const tranformData = (data) => {
      const { id, image, instructions, title } = data;

      const foodInformation = {
        id,
        image,
        title,
        description: instructions,
      };

      dispatch(foodInfoActions.replaceFoodInfo(foodInformation));
    };

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
        <FoodInfo food={foodInfo} />
      </div>
    </>
  );
};

export default FoodsDetails;

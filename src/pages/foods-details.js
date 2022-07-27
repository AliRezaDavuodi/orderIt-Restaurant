import useApiFetch from "hooks/use-api-fetch/useApiFetch";
import React, { useEffect } from "react";
import { MetaTags } from "react-meta-tags"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router-dom"
import Card from "../components/card/card"

import FoodInfo from "../components/food-info/food-info"
import LoadingSpinner from "../components/loading-spinner/loading-spinner"
import NotFoundData from "../components/not-found-data/not-found-data"

import { foodInfoActions } from "../store/foodDetails"

const FoodsDetails = () => {
  const params = useParams()

  // get food's id to display its information
  const { foodID } = params

  const dispatch = useDispatch()

  // get info object of store
  const foodInfo = useSelector(state => state.info.info)

  // to format the response
  const tranformData = data => {
    // destructuring data object
    const { id, image, instructions, title } = data

    // create suitable object
    const foodInformation = {
      id,
      image,
      title,
      description: instructions,
    }

    return foodInformation
  }

  // send request to get data
  const { data, loading, success } = useApiFetch(
    "food",
    "info",
    { foodID },
    tranformData
  )

  // set data
  useEffect(() => {
    let isSubscribed = true

    if (!isSubscribed) return

    if (success) {
      // update food info object
      dispatch(foodInfoActions.replaceFoodInfo(data))
    }

    return _ => (isSubscribed = false)
  }, [success, data, dispatch])

  return (
    <>
      <MetaTags>
        <title> Order It | Food Info </title>
      </MetaTags>

      {!success && !loading && (
        <Card className="container">
          <NotFoundData> NO Data Found Please Try Again </NotFoundData>
        </Card>
      )}
      {success && (
        <div className="fadeIn">
          {loading && <LoadingSpinner />}
          {!loading && <FoodInfo food={foodInfo} />}
        </div>
      )}
    </>
  )
}

export default FoodsDetails;

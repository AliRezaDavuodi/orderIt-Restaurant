/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import SendingRequest from "utilities/send-request-component"

import Card from "../components/card/card"
import FoodsList from "../components/foods-list/foods-list"
import LoadingSpinner from "../components/loading-spinner/loading-spinner"
import Navigation from "../components/navigation/navigation"
import SearchFood from "../components/search-food/search-food"
import { convertFoodData } from "utilities/convert-food-data"
import { foodsActions } from "../store/foods"

const Foods = () => {
  const dispatch = useDispatch()

  const [sendRequest, setSendRequest] = useState(false)
  const [loading, setLoading] = useState(false)
  const [_, setErr] = useState()
  const [searchQuery, setSearchQuery] = useState("")

  // convert data
  const TransformData = data => {
    const searchedRecipes = convertFoodData(data)
    dispatch(foodsActions.replaceFoods(searchedRecipes))
  }

  const getFoodHandler = query => {
    if (query.length === 0) return

    setSearchQuery(query)

    // sending request is allowed
    setSendRequest(true)
  }

  return (
    <>
      {sendRequest && (
        <SendingRequest
          category="food"
          subCategory="foods"
          converter={TransformData}
          data={{ query: searchQuery }}
          setLoading={setLoading}
          setSendRequest={setSendRequest}
          setErr={setErr}
        />
      )}
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
  )
}

export default Foods

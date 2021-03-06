import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import LoadingSpinner from "components/loading-spinner/loading-spinner"

import { authRoute, userRoute } from "./router/allRouter"
import { authActions } from "./store/auth"
import { cartActions } from "./store/cart"
import { likeActions } from "./store/favorite"
import { foodsActions } from "./store/foods"

import useApiFetch from "hooks/use-api-fetch/useApiFetch"
import AuthMiddleware from "router/middleware/AuthMiddleware"
import { Switch } from "react-router-dom"

function App() {
  const auth = useSelector(state => state.auth.token)
  const isAuth = !!auth
  const dispatch = useDispatch()

  const { data: allFoods, loading } = useApiFetch("food", "random")

  // get previous data that saved in localstorage
  useEffect(() => {
    let isSubscribed = true

    if (!isSubscribed) return

    const token = localStorage.getItem("token")
    if (token) {
      const authInfo = {
        token,
      }
      dispatch(authActions.login(authInfo))
    }

    if (!!allFoods) {
      dispatch(foodsActions.replaceFoods(allFoods))
    }

    if (!isAuth) return

    // get previous user data
    const cartItems = JSON.parse(localStorage.getItem("cart"))
    const likedFood = JSON.parse(localStorage.getItem("like"))

    // set previous user data
    if (cartItems?.length > 0) {
      dispatch(cartActions.replaceCartFoods(cartItems))
    }
    if (likedFood?.length > 0) {
      dispatch(likeActions.replaceLikedFood(likedFood))
    }

    return _ => (isSubscribed = false)
  }, [dispatch, allFoods, isAuth])

  // choose which routes user can see
  // const routes = isAuth ? [...privateRoute, ...publicRoute] : publicRoute

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <main>
          <Switch>
            {authRoute.map((route, idx) => (
              <AuthMiddleware
                key={idx}
                exact={route.exact}
                path={route.path}
                component={route.component}
                isAuthProtected={false}
              />
            ))}
            {userRoute.map((route, idx) => (
              <AuthMiddleware
                key={idx}
                exact={route.exact}
                path={route.path}
                component={route.component}
                isAuthProtected={false}
              />
            ))}
          </Switch>
        </main>
      )}
    </>
  )
}

export default App;

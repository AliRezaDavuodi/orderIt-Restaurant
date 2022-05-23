import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/loading-spinner/loading-spinner";
import { convertFoodData } from "./hooks/http-request/apis";
import {
  spoonacularApiKey,
  spoonacularGetFood,
} from "./hooks/http-request/urls";
import useHttpRequest from "./hooks/http-request/use-http";

import { privateRoute, publicRoute } from "./router/router";
import { authActions } from "./store/auth";
import { cartActions } from "./store/cart";
import { likeActions } from "./store/favorite";
import { foodsActions } from "./store/foods";

const RANDOM__FOOD__URL = `${spoonacularGetFood}number=10${spoonacularApiKey}`;

function App() {
  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth;
  const dispatch = useDispatch();

  const {
    request: gettingRandomFood,
    loading,
    data: allFoods,
  } = useHttpRequest();

  useEffect(() => {
    // convert recived data
    const convertRandomFoods = (data) => {
      return convertFoodData(data);
    };
    // sendig request to get food only when the user is logged in
    gettingRandomFood({ url: RANDOM__FOOD__URL }, convertRandomFoods);
  }, [gettingRandomFood, dispatch]);

  // get previous data that saved in localstorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const authInfo = {
        token,
      };
      dispatch(authActions.login(authInfo));
    }

    if (!!allFoods) {
      dispatch(foodsActions.replaceFoods(allFoods));
    }

    if (!isAuth) return;

    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const likedFood = JSON.parse(localStorage.getItem("like"));

    if (cartItems?.length > 0) {
      dispatch(cartActions.replaceCartFoods(cartItems));
    }

    if (likedFood?.length > 0) {
      dispatch(likeActions.replaceLikedFood(likedFood));
    }
  }, [dispatch, allFoods, isAuth]);

  // choose which route user can see
  const routes = isAuth ? [...privateRoute, ...publicRoute] : publicRoute;

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <main>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      )}
    </>
  );
}

export default App;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import { convertFoodData } from "./Hooks/http-request/apis";
import {
  spoonacularApiKey,
  spoonacularGetFood,
} from "./Hooks/http-request/urls";
import useHttpRequest from "./Hooks/http-request/use-http";

import { authRoutes, userRoutes } from "./router/router";
import { authActions } from "./store/auth";
import { foodsActions } from "./store/foods";

const RANDOM__FOOD__URL = `${spoonacularGetFood}number=10${spoonacularApiKey}`;

function App() {
  const auth = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const {
    request: gettingRandomFood,
    loading,
    data: allFoods,
  } = useHttpRequest();

  useEffect(() => {
    const convertRandomFoods = (data) => {
      return convertFoodData(data);
    };

    // sendig request to get food only when the user is logged in
    if (!!auth) {
      gettingRandomFood({ url: RANDOM__FOOD__URL }, convertRandomFoods);
    }

    if (allFoods) {
      dispatch(foodsActions.replaceFoods(allFoods));
    }
  }, [gettingRandomFood, dispatch, auth, allFoods]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const authInfo = {
        token,
      };
      dispatch(authActions.login(authInfo));
    }
  }, [dispatch]);

  const routes = !!auth ? authRoutes : userRoutes;

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

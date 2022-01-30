import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import { convertFoodData } from "./Hooks/http-request/apis";
import useHttpRequest from "./Hooks/http-request/use-http";

import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Foods from "./Pages/Foods";
import FoodsDetails from "./Pages/FoodsDetails";
import Home from "./Pages/Home";
import { authActions } from "./store/auth";
import { foodsActions } from "./store/foods";

const RANDOM__FOOD__URL =
  "https://api.spoonacular.com/recipes/random?number=10&apiKey=d305e19b4ada4db5a5c275ed4480c431";

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

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && (
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            {!!auth && (
              <Route path="/foods" exact>
                <Foods />
              </Route>
            )}
            {!!auth && (
              <Route path="/foods/:foodID">
                <FoodsDetails />
              </Route>
            )}
            {!!auth && (
              <Route path="/cart">
                <Cart />
              </Route>
            )}
            {!!auth && (
              <Route path="/favorite">
                <Favorite />
              </Route>
            )}

            {!!!auth && (
              <Route path="/auth">
                <Auth />
              </Route>
            )}

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      )}
    </>
  );
}

export default App;

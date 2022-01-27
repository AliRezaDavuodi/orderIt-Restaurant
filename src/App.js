import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import useHttpRequest from "./Hooks/http-request/use-http";

import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Foods from "./Pages/Foods";
import FoodsDetails from "./Pages/FoodsDetails";
import Home from "./Pages/Home";
import { foodsActions } from "./store/foods";

const RANDOM__FOOD__URL =
  "https://api.spoonacular.com/recipes/random?number=10&apiKey=d305e19b4ada4db5a5c275ed4480c431";

function App() {
  const { request } = useHttpRequest();
  const dispatch = useDispatch();

  useEffect(() => {
    const convertRandomFoods = (data) => {
      const { recipes } = data;

      console.log(recipes);

      const suggesionFoods = [];

      recipes.forEach((recipe) => {
        const dataObj = {
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          description: recipe.summary.slice(0, 120) + "...",
          price: recipe.pricePerServing,
        };

        suggesionFoods.push(dataObj);
      });
      dispatch(foodsActions.replaceFoods(suggesionFoods));
    };

    request({ url: RANDOM__FOOD__URL }, convertRandomFoods);
  }, [request, dispatch]);

  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/foods" exact>
            <Foods />
          </Route>
          <Route path="/foods/:foodID">
            <FoodsDetails />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

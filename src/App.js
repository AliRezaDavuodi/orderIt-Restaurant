import { Redirect, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import Navigation from "./Components/Navigation/Navigation";
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Foods from "./Pages/Foods";
import FoodsDetails from "./Pages/FoodsDetails";
import Home from "./Pages/Home";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Navigation />}
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

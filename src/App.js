import { Redirect, Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Hero from "./Components/Hero/Hero";
import Navigation from "./Components/Navigation/Navigation";
import Auth from "./Pages/Auth";
import Foods from "./Pages/Foods";
import FoodsDetails from "./Pages/FoodsDetails";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Navigation />}
      <main>
        <Switch>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/foods">
            <Foods />
          </Route>
          <Route path="/foods-detail">
            <FoodsDetails />
          </Route>
          <Route path="/auth">
            <Auth />
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

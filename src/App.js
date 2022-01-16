import { Redirect, Route, Switch } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import Auth from "./Pages/Auth";
import Foods from "./Pages/Foods";
import FoodsDetails from "./Pages/FoodsDetails";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

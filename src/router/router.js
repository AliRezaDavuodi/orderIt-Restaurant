import { Redirect } from "react-router-dom";

import Auth from "../Pages/Auth";
import Cart from "../Pages/Cart";
import Favorite from "../Pages/Favorite";
import Foods from "../Pages/Foods";
import FoodsDetails from "../Pages/FoodsDetails";
import Home from "../Pages/Home";

export const userRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/auth",
    component: Auth,
    exact: false,
  },
  {
    path: "/*",
    component: () => <Redirect to="/" />,
    exact: false,
  },
];

export const authRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/foods",
    component: Foods,
    exact: true,
  },
  {
    path: "/foods/:foodID",
    component: FoodsDetails,
    exact: false,
  },
  {
    path: "/cart",
    component: Cart,
    exact: true,
  },
  {
    path: "/favorite",
    component: Favorite,
    exact: true,
  },
  {
    path: "/*",
    component: () => <Redirect to="/" />,
    exact: false,
  },
];
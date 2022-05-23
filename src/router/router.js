import { Redirect } from "react-router-dom";

import Auth from "../pages/auth";
import Cart from "../pages/cart";
import Favorite from "../pages/favorite";
import Foods from "../pages/foods";
import FoodsDetails from "../pages/foods-details";
import Home from "../pages/home";

export const privateRoute = [
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
];

export const publicRoute = [
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
    path: "/*",
    component: () => <Redirect to="/" />,
    exact: false,
  },
];

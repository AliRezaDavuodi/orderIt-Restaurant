import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { authActions } from "../../store/auth";

import Cart from "../../assets/cart.png";
import Like from "../../assets/heart.png";

import css from "./navigation.module.scss";
import { toast } from "react-toastify";

const Navigation = () => {
  const [toggle, settoggle] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth;

  const cartItem = useSelector((state) => state.cart.foods);
  const likeItemLength = useSelector((state) => state.like.likes.length);

  const cartItemLength = cartItem.reduce((acc, cur) => acc + cur.amount, 0);

  const logoutHandler = () => {
    if (isAuth) {
      toast.success("you logged out successfully", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setTimeout(() => {
        dispatch(authActions.logout());
      }, 3000);
    }
  };

  return (
    <section>
      <nav className={`${css.nav} ${toggle ? css.show : ""}`}>
        <div className={css["nav__logo"]}>
          <h2> Order It </h2>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink
              activeClassName={css.active}
              to="/"
              exact
              className={css.link}
            >
              Home
            </NavLink>
          </li>

          <li className={css.item}>
            <NavLink
              activeClassName={css.active}
              to="/foods"
              className={css.link}
            >
              Foods
            </NavLink>
          </li>

          <li className={css.item}>
            <NavLink
              activeClassName={isAuth ? "" : css.active}
              className={css.link}
              to={isAuth ? "/" : "/auth"}
              onClick={logoutHandler}
            >
              {isAuth ? "log out" : "sign up"}
            </NavLink>
          </li>
        </ul>
        {isAuth && (
          <div className={css.personal}>
            <div className={css["personal-icon"]}>
              <NavLink activeClassName={css.active} to="/cart">
                <img src={Cart} alt="cart icon" />
                <div className={css.budget}>
                  <span> {cartItemLength} </span>
                </div>
              </NavLink>
            </div>
            <div className={css["personal-icon"]}>
              <NavLink activeClassName={css.active} to="/favorite">
                <img src={Like} alt="cart icon" />
                <div className={css.budget}>
                  <span> {likeItemLength} </span>
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </nav>
      <div
        className={`${css.humber} ${toggle ? css.show : ""}`}
        onClick={() => settoggle((state) => !state)}
      >
        <span></span>
      </div>
    </section>
  );
};

export default Navigation;

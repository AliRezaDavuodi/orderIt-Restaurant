import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { authActions } from "../../store/auth";

import Cart from "../../assests/cart.png";
import Like from "../../assests/heart.png";

import css from "./Navigation.module.scss";

const Navigation = () => {
  const [toggle, settoggle] = useState(false);
  const auth = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.foods);
  const likeItemLength = useSelector((state) => state.like.likes.length);

  const cartItemLength = cartItem.reduce((acc, cur) => acc + cur.amount, 0);

  const logoutHandler = () => {
    if (!!auth) {
      dispatch(authActions.logout());
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
          {!!auth && (
            <li className={css.item}>
              <NavLink
                activeClassName={css.active}
                to="/foods"
                className={css.link}
              >
                Foods
              </NavLink>
            </li>
          )}
          <li className={css.item}>
            <NavLink
              activeClassName={!!auth ? "" : css.active}
              className={css.link}
              to={!!auth ? "/" : "/auth"}
              onClick={logoutHandler}
            >
              {!!auth ? "log out" : "sign up"}
            </NavLink>
          </li>
        </ul>
        {!!auth && (
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

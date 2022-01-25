import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Cart from "../../assests/cart.png";
import Like from "../../assests/heart.png";

import css from "./Navigation.module.scss";

const Navigation = () => {
  const [toggle, settoggle] = useState(false);
  const [cartBeat, setCartBeat] = useState(false);
  const [likeBeat, setLikeBeat] = useState(false);

  const cartFoods = useSelector((state) => state.cart.foods);
  const likeFoods = useSelector((state) => state.like.likes);

  // beat animaion for cart section
  useEffect(() => {
    if (cartFoods.length === 0) return;
    setCartBeat(true);
    const timer = setTimeout(() => {
      setCartBeat(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [cartFoods]);

  // beat animation for like section
  useEffect(() => {
    if (likeFoods.length === 0) return;
    setLikeBeat(true);
    const timer = setTimeout(() => {
      setLikeBeat(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [likeFoods]);

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
              activeClassName={css.active}
              to="/auth"
              className={css.link}
            >
              sign up
            </NavLink>
          </li>
        </ul>
        <div className={css.personal}>
          <div className={css["personal-icon"]}>
            <NavLink activeClassName={css.active} to="/cart">
              <img
                src={Cart}
                alt="cart icon"
                className={`${cartBeat ? "beatUp" : ""}`}
              />
            </NavLink>
          </div>
          <div className={css["personal-icon"]}>
            <NavLink activeClassName={css.active} to="/favorite">
              <img
                src={Like}
                alt="cart icon"
                className={`${likeBeat ? "beatUp" : ""}`}
              />
            </NavLink>
          </div>
        </div>
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

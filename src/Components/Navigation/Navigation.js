import React from "react";
import { Link, NavLink } from "react-router-dom";

import Cart from "../../assests/cart.png";
import Like from "../../assests/heart.png";

import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={css.nav}>
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
          <NavLink activeClassName={css.active} to="/auth" className={css.link}>
            sign up
          </NavLink>
        </li>
      </ul>
      <div className={css.personal}>
        <div className={css["personal-icon"]}>
          <Link to="/cart">
            <img src={Cart} alt="cart icon" />
          </Link>
        </div>
        <div className={css["personal-icon"]}>
          <Link to="/favorite">
            <img src={Like} alt="cart icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

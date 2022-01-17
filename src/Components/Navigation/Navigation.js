import React from "react";
import { NavLink } from "react-router-dom";

import Cart from "../../assests/cart.png";
import Like from "../../assests/heart.png";

import css from "./Navigation.module.scss";

const Navigation = (props) => {
  const navbarClassName = `${css.nav} ${props.homePage ? css.home : ""}`;

  return (
    <nav className={navbarClassName}>
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
          <NavLink activeClassName={css.active} to="/cart">
            <img src={Cart} alt="cart icon" />
          </NavLink>
        </div>
        <div className={css["personal-icon"]}>
          <NavLink activeClassName={css.active} to="/favorite">
            <img src={Like} alt="cart icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

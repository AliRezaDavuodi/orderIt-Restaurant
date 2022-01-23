import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Cart from "../../assests/cart.png";
import Like from "../../assests/heart.png";
import Card from "../Card/Card";

import css from "./Navigation.module.scss";

const Navigation = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <Card className="full">
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
      <div
        className={`${css.humber} ${toggle ? css.show : ""}`}
        onClick={() => settoggle((state) => !state)}
      >
        <span></span>
      </div>
    </Card>
  );
};

export default Navigation;

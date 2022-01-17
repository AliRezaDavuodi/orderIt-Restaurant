import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className={css.link}>
            Home
          </Link>
        </li>
        <li className={css.item}>
          <Link to="/foods" className={css.link}>
            Foods
          </Link>
        </li>
        <li className={css.item}>
          <Link to="/auth" className={css.link}>
            sign up
          </Link>
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

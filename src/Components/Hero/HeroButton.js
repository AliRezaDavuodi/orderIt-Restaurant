import React from "react";
import { Link } from "react-router-dom";

import css from "./HeroButton.module.scss";

const HeroButton = (props) => {
  return (
    <Link to="/foods" className={css.btn}>
      {props.children}
    </Link>
  );
};

export default HeroButton;

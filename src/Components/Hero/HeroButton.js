import React from "react";

import css from "./HeroButton.module.scss";

const HeroButton = (props) => {
  return <button className={css.btn}>{props.children}</button>;
};

export default HeroButton;

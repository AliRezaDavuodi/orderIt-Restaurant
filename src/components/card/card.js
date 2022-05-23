import React from "react";

import "./card.scss";

const Card = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Card;

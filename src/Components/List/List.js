import React from "react";

import css from "./List.module.scss";

const List = (props) => {
  return <ul className={css.list}>{props.children}</ul>;
};

export default List;

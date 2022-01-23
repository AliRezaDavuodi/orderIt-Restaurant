import React from "react";

import FoodItem from "../FoodItem/FoodItem";

import css from "./List.module.scss";

const List = (props) => {
  const classes = `${css.list} ${props.cart ? css.cart : ""}`;
  return (
    <ul className={classes}>
      {props.foods.map((food) => (
        <FoodItem
          id={food.id}
          title={food.title}
          description={food.description}
          key={food.id}
          img={food.image}
          price={food.price}
          cart={props.cart}
        />
      ))}
    </ul>
  );
};

export default List;

import React from "react";

import FoodItem from "../food-item/food-item";

import css from "./list.module.scss";

const List = (props) => {
  const classes = `${css.list} ${props.cart ? css.cart : ""}`;

  return (
    <ul className={classes}>
      {props.foods.map((food) => {
        const price = "$" + food.price;
        return (
          <FoodItem
            key={food.id}
            id={food.id}
            title={food.title}
            description={food.description}
            img={food.image}
            price={price}
            cart={props.cart}
            item={food}
            amount={food.amount}
            like={props.like}
          />
        );
      })}
    </ul>
  );
};

export default List;

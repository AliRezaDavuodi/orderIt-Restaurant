import React from "react";

import FoodItem from "../FoodItem/FoodItem";

import css from "./List.module.scss";

const List = (props) => {
  const classes = `${css.list} ${props.cart ? css.cart : ""}`;

  let content = <h2 className="title center"> no food found </h2>;

  if (props.foods.length > 0) {
    content = props.foods.map((food) => (
      <FoodItem
        id={food.id}
        title={food.title}
        description={food.description}
        key={food.id}
        img={food.image}
        price={food.price}
        cart={props.cart}
        item={food}
        amount={food.amount}
      />
    ));
  }

  return <ul className={classes}>{content}</ul>;
};

export default List;

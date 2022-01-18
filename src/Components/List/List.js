import React from "react";
import Card from "../Card/Card";
import FoodItem from "../FoodItem/FoodItem";

import css from "./List.module.scss";

const List = (props) => {
  return (
    <Card className="container">
      <ul className={css.list}>
        {props.foods.map((food) => (
          <FoodItem
            id={food.id}
            title={food.title}
            description={food.description}
            key={food.id}
            img={food.image}
            price={food.price}
          />
        ))}
      </ul>
    </Card>
  );
};

export default List;

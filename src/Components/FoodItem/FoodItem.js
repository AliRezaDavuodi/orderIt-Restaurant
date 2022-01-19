import React, { useState } from "react";

import unlike from "../../assests/unlike.png";
import like from "../../assests/like.png";

import css from "./FoodItem.module.scss";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";

const FoodItem = (props) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const history = useHistory();

  const removeHandler = () => {
    alert("remove");
  };

  const addHandler = () => {
    alert("add");
  };

  const changeLikeHandler = () => {
    setLikeBtn((like) => !like);
  };

  const showDetailHandler = () => {
    history.push(`/foods/${props.id}`);
  };

  const foodItemClass = `fadeIn ${css.food}`;

  return (
    <li className={foodItemClass}>
      <div className={css.img}>
        <img src={props.img} alt={props.description} />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h3> {props.title} </h3>
          {!props.cart && (
            <div className={css.like}>
              <img
                src={likeBtn ? like : unlike}
                onClick={changeLikeHandler}
                alt="like it"
              />
            </div>
          )}
          {props.cart && (
            <div className={css.amount}>
              <Button small>+</Button>
              <span> 5X </span>
              <Button small>-</Button>
            </div>
          )}
        </div>

        <div className={css.description}>
          <p>{props.description}</p>
        </div>

        <Card className="btnCard">
          <p className={css.price}> {props.price} </p>
          <Button onClick={props.cart ? removeHandler : addHandler}>
            {props.cart ? "Remove" : "Add To Cart"}
          </Button>
          <Button onClick={showDetailHandler}>See More</Button>
        </Card>
      </div>
    </li>
  );
};

export default FoodItem;

import React, { useState } from "react";

import unlike from "../../assests/unlike.png";
import like from "../../assests/like.png";
import message from "../../assests/message.png";

import css from "./FoodItem.module.scss";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";

const FoodItem = (props) => {
  const [likeBtn, setLikeBtn] = useState(false);
  const history = useHistory();

  const changeLikeHandler = () => {
    setLikeBtn((like) => !like);
  };

  const showDetailHandler = () => {
    history.push(`/foods/${props.id}`);
  };
  const addCommentHandler = () => {
    history.push(`/foods/${props.id}/comments`);
  };

  return (
    <li className={css.food}>
      <div className={css.img}>
        <img src={props.img} alt={props.description} />
      </div>
      <div className={css.info}>
        <div className={css.header}>
          <h3> {props.title} </h3>
          <div className={css.like}>
            <img
              src={likeBtn ? like : unlike}
              onClick={changeLikeHandler}
              alt="like it"
            />
          </div>
        </div>
        <div className={css.description}>
          <p>{props.description}</p>
        </div>
        <div className={css.actions}>
          <p className={css.price}> {props.price} </p>
          <Button>Add To Card</Button>
          <Button onClick={showDetailHandler}>see details</Button>
          <Button onClick={addCommentHandler}>leave comment</Button>
        </div>
      </div>
    </li>
  );
};

export default FoodItem;

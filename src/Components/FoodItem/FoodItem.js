import React, { useState } from "react";

import unlike from "../../assests/unlike.png";
import like from "../../assests/like.png";
import message from "../../assests/message.png";

import css from "./FoodItem.module.scss";
import { Link, useHistory } from "react-router-dom";

const FoodItem = (props) => {
  const [likeBtn, setLikeBtn] = useState(false);

  const changeLikeHandler = () => {
    setLikeBtn((like) => !like);
  };

  return (
    <li className={css.food}>
      <div className={css.img}>
        <img src={props.img} alt={props.description} />
      </div>
      <div className={css.info}>
        <div className={css["info-title"]}>
          <h3> {props.title} </h3>
        </div>
        <div className={css["info-description"]}>
          <p>
            {props.description}
            <Link to={`/foods/${props.id}`} className={css.more}>
              More <span>&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
      <div className={css.actions}>
        <div className={css.like}>
          <img
            src={likeBtn ? like : unlike}
            onClick={changeLikeHandler}
            alt="like it"
          />
          <img src={message} alt="leave a comment" />
        </div>
        <div className={css.order}>
          <button> add to cart </button>
          <input type="number" min="0" max="5" defaultValue="0" />
          <span> {props.price} </span>
        </div>
      </div>
    </li>
  );
};

export default FoodItem;

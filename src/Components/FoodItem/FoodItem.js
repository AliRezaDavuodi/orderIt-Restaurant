import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

import unlike from "../../assests/unlike.png";
import like from "../../assests/like.png";

import css from "./FoodItem.module.scss";

import Button from "../Button/Button";
import Card from "../Card/Card";
import { likeActions } from "../../store/favorite";

const FoodItem = (props) => {
  const history = useHistory();

  const foodsLike = useSelector((state) => state.like.likes);
  const cartItems = useSelector((state) => state.cart.foods);

  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth;

  const dispatch = useDispatch();

  const removeHandler = (item) => {
    dispatch(cartActions.deleteItemFromCart(item));
  };

  const addHandler = (item) => {
    if (!isAuth) {
      alert("you have to signin to add item to cart");
      return;
    }

    dispatch(cartActions.addItemToCart(item));
  };

  const increaseItems = (item) => {
    dispatch(cartActions.increaseItem(item));
  };
  const decreaseItems = (item) => {
    dispatch(cartActions.decreaseItem(item));
  };

  const changeLikeHandler = (item) => {
    if (!isAuth) {
      alert("you have to signin to like items");
      return;
    }
    dispatch(likeActions.addItem(item));
  };
  const changeUnlikeHandler = (item) => {
    dispatch(likeActions.deleteItem(item));
  };

  const showDetailHandler = () => {
    history.push(`/foods/${props.id}`);
  };

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(foodsLike));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [foodsLike, cartItems]);

  const foodItemClass = `fadeIn ${css.food}`;

  // check if the food is liked and convert it to a boolean
  const isLike = isAuth
    ? !!foodsLike.find((food) => food.id === props.id)
    : false;

  return (
    <li className={foodItemClass}>
      <div className={css.img}>
        <img src={props.img} alt={props.title} />
      </div>

      <div className={css.info}>
        <div className={css.header}>
          <h3> {props.title} </h3>
          {!props.cart && (
            <div className={css.like}>
              <img
                src={isLike ? like : unlike}
                onClick={
                  isLike
                    ? changeUnlikeHandler.bind(null, props.item)
                    : changeLikeHandler.bind(null, props.item)
                }
                alt="like it"
              />
            </div>
          )}
          {props.cart && (
            <div className={css.amount}>
              <Button
                small="true"
                onClick={increaseItems.bind(null, props.item)}
              >
                +
              </Button>
              <span> {props.amount}X </span>
              <Button
                small="true"
                onClick={decreaseItems.bind(null, props.item)}
              >
                -
              </Button>
            </div>
          )}
        </div>

        <div
          className={css.description}
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>

        <Card className="btnCard">
          <p className={css.price}> {props.price} </p>
          <Button
            onClick={
              props.cart
                ? removeHandler.bind(null, props.item)
                : addHandler.bind(null, props.item)
            }
          >
            {props.cart ? "Remove" : "Add"}
          </Button>
          <Button onClick={showDetailHandler}>More</Button>
        </Card>
      </div>
    </li>
  );
};

export default FoodItem;

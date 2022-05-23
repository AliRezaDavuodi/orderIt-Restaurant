import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/button";
import Card from "../card/card";

import List from "../list/list";
import NotFoundData from "../not-found-data/not-found-data";

import css from "./cart-component.module.scss";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.foods);

  // find the amount of each food
  const itemsAmount = cartItems.reduce((acc, cur) => acc + cur.amount, 0);

  // calculate total price of item's cart
  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
    .toFixed(2);

  return (
    <Card className="full">
      <Card className={`container ${css.pay}`}>
        {cartItems.length === 0 ? (
          <NotFoundData> your cart is empty </NotFoundData>
        ) : (
          <>
            <div className={css.cartTitlte}>
              <h2>{itemsAmount} items</h2>
              <span> ${totalPrice} </span>
            </div>
            <List foods={cartItems} cart="true" />
            <Card className={`btnCard ${css.cartFooter}`}>
              <Button full="true"> checkOut </Button>
            </Card>
          </>
        )}
      </Card>
    </Card>
  );
};

export default CartComponent;

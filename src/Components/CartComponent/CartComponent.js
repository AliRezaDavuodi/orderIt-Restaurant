import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Card from "../Card/Card";

import List from "../List/List";
import NotFoundData from "../NotFoundData/NotFoundData";

import css from "./CartComponent.module.scss";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.foods);

  const itemsAmount = cartItems.reduce((acc, cur) => acc + cur.amount, 0);
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

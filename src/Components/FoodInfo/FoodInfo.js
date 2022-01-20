import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import CommentsList from "../CommentsList/CommentsList";

import css from "./FoodInfo.module.scss";
import CommentForm from "../CommentForm/CommentForm";

const FoodInfo = (props) => {
  const history = useHistory();

  console.log(history.location.search);

  const clickCommentHandler = () => {
    history.push(`${history.location.pathname}?comments=show`);
  };

  const clickCloseCommentHandler = () => {
    history.push(history.location.pathname);
  };

  return (
    <Card className="full">
      <Card className={`container`}>
        <div className={css.info}>
          <div className={css.img}>
            <img src={props.food.image} alt={props.food.description} />
          </div>
          <div className={css.detail}>
            <div>
              <h2> {props.food.title} </h2>
              <p> {props.food.description} </p>
            </div>

            <Card className={`cardBtn ${css.btn}`}>
              <Button
                center="true"
                onClick={
                  !history.location.search
                    ? clickCommentHandler
                    : clickCloseCommentHandler
                }
              >
                {!history.location.search ? "leave a comment" : "Cancel"}
              </Button>
            </Card>
          </div>
        </div>

        {history.location.search && <CommentForm />}

        <CommentsList />
      </Card>
    </Card>
  );
};

export default FoodInfo;

import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import Comments from "../Comments/Comments";

import css from "./FoodInfo.module.scss";

const COMMENTS = [
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment:
      "this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best this is the best ",
    id: "1",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "2",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "3",
  },
  {
    name: "AliReza Davuodi",
    date: "17 nov",
    comment: "this is the best",
    id: "4",
  },
];

const FoodInfo = (props) => {
  const history = useHistory();

  console.log(history.location);

  const clickCommentHandler = () => {
    history.push(`${history.location.pathname}?comments`);
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
        <div className={css.comments}>
          <ul>
            {COMMENTS.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </ul>
        </div>
      </Card>
    </Card>
  );
};

export default FoodInfo;

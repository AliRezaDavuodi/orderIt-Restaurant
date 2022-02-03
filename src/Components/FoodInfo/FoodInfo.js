import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";

import css from "./FoodInfo.module.scss";
import { useSelector } from "react-redux";

const FoodInfo = (props) => {
  const [comments, setComments] = useState(false);

  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth;

  const location = useLocation();

  const clickCommentHandler = () => {
    if (!isAuth) {
      alert("you have to signin to leave a comment");
      return;
    }
    setComments(true);
  };

  const clickCloseCommentHandler = () => {
    setComments(false);
  };

  // start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Card className="full">
      <Card className={`container`}>
        <div className={css.info}>
          <div className={css.img}>
            <img src={props.food.image} alt={props.food.title} />
          </div>
          <div className={css.detail}>
            <div>
              <h2> {props.food.title} </h2>
              <div
                className={css["detail-info"]}
                dangerouslySetInnerHTML={{ __html: props.food.description }}
              ></div>
            </div>

            <Card className={`cardBtn ${css.btn}`}>
              <Button
                center="true"
                onClick={
                  !comments ? clickCommentHandler : clickCloseCommentHandler
                }
              >
                {!comments ? "leave a comment" : "Cancel"}
              </Button>
            </Card>
          </div>
        </div>

        {comments && <CommentForm />}

        <CommentsList />
      </Card>
    </Card>
  );
};

export default FoodInfo;

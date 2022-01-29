import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import CommentsList from "../CommentsList/CommentsList";

import css from "./FoodInfo.module.scss";

import CommentForm from "../CommentForm/CommentForm";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const FoodInfo = (props) => {
  const location = useLocation();
  const history = useHistory();

  const clickCommentHandler = () => {
    history.replace(`${location.pathname}?comments=show`);
  };

  const clickCloseCommentHandler = () => {
    history.push(location.pathname);
  };

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
                  !location.search
                    ? clickCommentHandler
                    : clickCloseCommentHandler
                }
              >
                {!location.search ? "leave a comment" : "Cancel"}
              </Button>
            </Card>
          </div>
        </div>

        {location.search && <CommentForm />}

        <CommentsList />
      </Card>
    </Card>
  );
};

export default FoodInfo;

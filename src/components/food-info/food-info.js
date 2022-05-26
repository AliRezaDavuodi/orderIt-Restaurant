import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Card from "../card/card";
import Button from "../button/button";
import CommentsList from "../comments-list/comments-list";
import CommentForm from "../comment-form/comment-form";

import css from "./food-info.module.scss";

import { useSelector } from "react-redux";
import Modal from "../modal/modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FoodInfo = (props) => {
  const [comments, setComments] = useState(false);
  const [modal, setModal] = useState(false);

  const auth = useSelector((state) => state.auth.token);
  const isAuth = !!auth;

  const history = useHistory();
  const location = useLocation();

  const clickCommentHandler = () => {
    if (!isAuth) {
      setModal(true);
      return;
    }
    setComments(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const goToSignup = () => {
    history.push("/auth");
  };

  const clickCloseCommentHandler = () => {
    setComments(false);
  };

  // start at the top of the page
  useEffect(() => {
    let isSubscribed = true

    if(isSubscribed)  window.scrollTo(0, 0);

    return _ => isSubscribed = false
  }, [location]);

  return (
    <>
      {modal && (
        <Modal>
          <h3 className="title"> please first signup then leave comment </h3>
          <Card className="btnCard">
            <Button onClick={goToSignup}> signup </Button>
            <Button onClick={closeModal}> cancel </Button>
          </Card>
        </Modal>
      )}

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
    </>
  );
};

export default FoodInfo;

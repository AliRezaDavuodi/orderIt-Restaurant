import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { firebaseRealDataBase } from "../../hooks/http-request/urls";
import useHttpRequest from "../../hooks/http-request/use-http";
import { commentsActions } from "../../store/comments";

import Button from "../button/button";
import Form from "../form/form";

import css from "./comment-form.module.scss";

const CommentForm = () => {
  const commentText = useRef();
  const param = useParams();
  const dispatch = useDispatch();

  const { request: sendingCommentToServer, loading } = useHttpRequest();

  const addCommentHandler = (e) => {
    e.preventDefault();

    if (commentText.current.value === 0) return;

    const commentInformation = {
      name: localStorage.getItem("name"),
      comment: commentText.current.value,
      date: new Date().toLocaleDateString(),
    };

    dispatch(commentsActions.addComment(commentInformation));

    const response = () => {
      console.log("comment sends");
    };

    sendingCommentToServer(
      {
        url: `${firebaseRealDataBase}/comment/${param.foodID}.json`,
        method: "POST",
        body: commentInformation,
        Headers: {
          "Content-Type": "application/json",
        },
      },
      response
    );
  };

  return (
    <>
      {!loading && (
        <Form center>
          <textarea ref={commentText} className={css.area} />
          <Button onClick={addCommentHandler}> add </Button>
        </Form>
      )}
    </>
  );
};

export default CommentForm;
import React, { useRef } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { firebaseRealDataBase } from "../../Hooks/http-request/urls";
import useHttpRequest from "../../Hooks/http-request/use-http";

import Button from "../Button/Button";
import Form from "../Form/Form";

import css from "./CommentForm.module.scss";

const CommentForm = () => {
  const commentText = useRef();

  const param = useParams();

  const { request: sendingCommentToServer } = useHttpRequest();

  const addCommentHandler = (e) => {
    e.preventDefault();

    const commentInformation = {
      name: localStorage.getItem("name"),
      comment: commentText.current.value,
      date: new Date(),
    };

    const response = () => {
      console.log("comment sends");
    };

    sendingCommentToServer(
      {
        url: `${firebaseRealDataBase}/comment/${param.foodID}.json`,
        method: "POST",
        body: commentInformation,
        Headers: {
          "Content-Type": "applicatoin/json",
        },
      },
      response
    );
  };

  return (
    <Form center>
      <textarea ref={commentText} className={css.area} />
      <Button onClick={addCommentHandler}> add </Button>
    </Form>
  );
};

export default CommentForm;

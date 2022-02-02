import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { firebaseRealDataBase } from "../../Hooks/http-request/urls";
import useHttpRequest from "../../Hooks/http-request/use-http";
import { commentsActions } from "../../store/comments";

import Comments from "../Comments/Comments";

import css from "./CommentsList.module.scss";

const CommentsList = () => {
  const { foodID } = useParams();

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);

  const { request: gettingComments, data } = useHttpRequest();

  useEffect(() => {
    const getComments = (comments) => {
      if (!comments) return;

      const allComments = [];

      for (const key in comments) {
        const commentObj = {
          id: key,
          ...comments[key],
        };
        allComments.push(commentObj);
      }

      return allComments;
    };

    gettingComments(
      { url: `${firebaseRealDataBase}/comment/${foodID}.json` },
      getComments
    );
  }, [gettingComments, foodID]);

  useEffect(() => {
    if (data?.length > 0) {
      dispatch(commentsActions.replceComments(data));
    }
  }, [dispatch, data]);

  return (
    <div className={css.comments}>
      {comments.length === 0 && <p className="title"> no comment yet</p>}
      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <Comments comment={comment} key={comment.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsList;

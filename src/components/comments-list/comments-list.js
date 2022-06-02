import useApiFetch from "hooks/use-api-fetch/useApiFetch"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { commentsActions } from "../../store/comments"

import Comments from "../comments/comments"

import css from "./comments-list.module.scss"

const CommentsList = () => {
  const { foodID } = useParams()

  const dispatch = useDispatch()
  const comments = useSelector(state => state.comment.comments)

  const getComments = comments => {
    if (!comments) return

    const allComments = []

    for (const key in comments) {
      const commentObj = {
        id: key,
        ...comments[key],
      }
      allComments.push(commentObj)
    }

    return allComments
  }

  const { data } = useApiFetch(
    "comment",
    "getComments",
    { foodID },
    getComments
  )

  useEffect(() => {
    let isSubscribed = true

    if (!isSubscribed) return

    if (data?.length > 0) {
      dispatch(commentsActions.replceComments(data))
    }

    return _ => (isSubscribed = false)
  }, [dispatch, data])

  return (
    <div className={css.comments}>
      {comments.length === 0 && <p className="title"> no comment yet</p>}
      {comments.length > 0 && (
        <ul>
          {comments.map(comment => (
            <Comments comment={comment} key={comment.id} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CommentsList

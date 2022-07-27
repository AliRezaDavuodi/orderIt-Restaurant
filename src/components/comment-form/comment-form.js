import React, { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import SendingRequest from "utilities/send-request-component"
import { commentsActions } from "../../store/comments"

import Button from "../button/button"
import Form from "../form/form"

import css from "./comment-form.module.scss"

const CommentForm = () => {
  const commentText = useRef()
  const param = useParams()
  const dispatch = useDispatch()

  const [sendRequest, setSendRequest] = useState(false)

  const [loading, setLoading] = useState(false)

  const [commentInfo, setCommentInfo] = useState({})

  const response = data => {
    // added toast

    return data
  }

  const addCommentHandler = e => {
    e.preventDefault()

    if (commentText.current.value === 0) return

    const commentInformation = {
      name: localStorage.getItem("name"),
      comment: commentText.current.value,
      date: new Date().toLocaleDateString(),
      foodID: param.foodID,
    }
    dispatch(commentsActions.addComment(commentInformation))
    setCommentInfo(commentInformation)
    setSendRequest(true)
  }

  return (
    <>
      {sendRequest && (
        <SendingRequest
          category="comment"
          subCategory="addComment"
          converter={response}
          data={commentInfo}
          setLoading={setLoading}
          setSendRequest={setSendRequest}
        />
      )}
      {!loading && (
        <Form center>
          <textarea ref={commentText} className={css.area} />
          <Button onClick={addCommentHandler}> add </Button>
        </Form>
      )}
    </>
  )
}

export default CommentForm

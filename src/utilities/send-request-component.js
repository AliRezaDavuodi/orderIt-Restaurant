import useApiFetch from "hooks/use-api-fetch/useApiFetch"
import { useEffect } from "react"

export default function SendingRequest({
  category,
  subCategory,
  converter,
  data = {},
  setLoading,
  setSendRequest,
  setErr,
  setData,
  setSuccess,
}) {
  const {
    loading,
    success,
    error,
    data: Result,
  } = useApiFetch(category, subCategory, data, converter)

  // set loading
  useEffect(() => {
    let subscribed = true

    if (!subscribed) return

    setLoading(loading)

    return () => (subscribed = false)
  }, [loading, setLoading])

  // set errors
  useEffect(() => {
    let subscribed = true

    if (!subscribed) return

    if (setErr) setErr(error)

    return () => (subscribed = false)
  }, [setErr, error, success])

  // set data
  useEffect(() => {
    let subscribed = true

    if (!subscribed) return

    if (setData) {
      setData(Result)
    }

    return () => (subscribed = false)
  }, [Result, setData])

  // set status of request
  useEffect(() => {
    let subscribed = true

    if (!subscribed) return

    if (success) {
      setSendRequest(false)
      setLoading(false)
    }

    if (setSuccess) {
      setSuccess(success)
    }

    return () => (subscribed = false)
  }, [success, setSendRequest, setLoading, setSuccess])

  return null
}

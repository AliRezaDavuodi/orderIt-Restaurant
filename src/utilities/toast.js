import { toast } from "react-toastify"

export const notif = (type, text, second) => {
  if (type === "success") {
    return toast.success(text, {
      position: "top-center",
      autoClose: second,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  if (type === "error") {
    return toast.error(text, {
      position: "top-center",
      autoClose: second,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  if (type === "warning") {
    return toast.warning(text, {
      position: "top-center",
      autoClose: second,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

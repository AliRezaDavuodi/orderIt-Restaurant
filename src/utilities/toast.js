import { toast } from "react-toastify"

export const notif = (varient, message, timeToClose) => {
  return toast[varient](message, {
    position: "top-center",
    autoClose: timeToClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

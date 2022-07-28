import { notif } from "utilities/toast"
import { logOut, singIn, singUp } from "./firebase"

// sign up
export async function signUp(obj) {
  try {
    // send user info to the firebase
    const user = await singUp(obj.email, obj.password)

    // check if the request was fulfilled
    if (!user.error) {
      notif("success", `welcome to ORDER IT`, 1000)
    }
  } catch (error) {
    // get the suitable message for error from firebase
    const errorCode = error.code
      ? error.code.split("/")[1].replaceAll("-", " ")
      : "something went wrong"
    notif("error", `${errorCode}`, 6000)
  }
}

export async function userLogin(obj) {
  try {
    // send user info to the firebase
    const user = await singIn(obj.email, obj.password)

    // check if the request was fulfilled
    if (!user.error) {
      notif("success", `welcome to ORDER IT`, 1000)
    }
  } catch (error) {
    // get the suitable message for error from firebase
    const errorCode = error.code
      ? error.code.split("/")[1].replaceAll("-", " ")
      : "something went wrong"
    notif("error", `${errorCode}`, 6000)
  }
}

export async function userLogout(state) {
  try {
    // send user info to the firebase
    await logOut()
  } catch (error) {
    // get the suitable message for error from firebase
    const errorCode = error.code
      ? error.code.split("/")[1].replaceAll("-", " ")
      : "something went wrong"
    notif("error", errorCode, 6000)
  }
}

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "./firebase-config"

export const singUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

export const singIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

export const logOut = () => signOut(auth)

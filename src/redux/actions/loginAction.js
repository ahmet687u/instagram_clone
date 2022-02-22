import * as types from "./types";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
});

export const login = (email, password, navigate) => async dispatch => {
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        dispatch(loginSuccess(userCredential.user));
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  } catch (err) {
    console.log(err);
  }
};

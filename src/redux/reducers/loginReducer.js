import * as types from "../actions/types";
import initialState from "./initialState";

export default function loginReducer(state = initialState.authUser, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

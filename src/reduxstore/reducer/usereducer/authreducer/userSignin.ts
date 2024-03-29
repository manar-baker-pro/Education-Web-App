import { ActionUser } from "../../../action/useraction/actionInterface";
import { SigninState } from "./userRinter";

export const userSign = (
  state: SigninState = {
    loadin: false,
    errorin: "",
    userInfo: undefined,
  },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_SIGN":
      return { ...state, loadin: true };
    case "SUCCESS_SIGN":
      return {
        ...state,
        loadin: false,
        userInfo: action.payload,
        errorin: "",
      };
    case "SUCCESS_SIGNOUT":
      return { ...state, loadin: false, userInfo: undefined };
    case "CLEAR_SIGN_IN_FLAG":
      return { ...state, loadin: false };
    case "FAILED_SIGN":
      return { ...state, loadin: false, errorin: action.payload };

    default: {
      return state;
    }
  }
};

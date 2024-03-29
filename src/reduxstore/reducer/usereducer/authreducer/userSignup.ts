import { ActionUser } from "../../../action/useraction/actionInterface";
import { SignupState } from "./userRinter";
export const userRigister = (
  state: SignupState = { loadup: false, errorup: {}, success: false },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_RIGISTER":
      return { ...state, loadup: true, message: undefined, success: false };
    case "REQUEST_CONFIRMED":
      return { ...state, loadup: true, success: false };
    case "SUCCESS_RIGISTER":
      return { ...state, loadup: false, message: action.payload, errorup: {} };
    case "SUCCESS_CONFIRMED":
      return {
        ...state,
        loadup: false,

        message: undefined,
        success: action.payload,
      };
    case "FAILED_CONFIRMED":
      return { ...state, success: false, loadup: false };
    case "FAILED_RIGISTER":
      return {
        ...state,
        loadup: false,
        errorup: action.payload,
        success: false,
        message: undefined,
      };
    default: {
      return state;
    }
  }
};

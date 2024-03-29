import axios from "axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SuccessUp,
  TryRegister,
  UserOrig,
} from "../../reducer/usereducer/authreducer/userRinter";
import { ActionUser } from "./actionInterface";
import { RootState } from "../../store";

export const Register = (user: TryRegister) => {
  toast.dismiss();
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({ type: "REQUEST_RIGISTER" });
      const { data } = await axios.post<SuccessUp>(
        "http://localhost:4010/auth/signup",
        user
      );
      if (data) toast.success("Confirm your email");
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
    } catch (err: any) {
      toast.error("Failed Rigister");
      if (err.response) {
        dispatch({ type: "FAILED_RIGISTER", payload: err.response.data });
      } else {
        dispatch({ type: "FAILED_RIGISTER", payload: err.message });
      }
    }
  };
};
export const ConfirmE = () => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    toast.dismiss();
    try {
      const {
        userRigister: { message },
      } = getState();
      dispatch({ type: "REQUEST_CONFIRMED" });
      const { data } = await axios.put<{ success: boolean }>(
        "http://localhost:4010/auth/allowing",
        message
      );
      if (data.success) toast.success("Check your email for confirmation");
      dispatch({ type: "SUCCESS_CONFIRMED", payload: data.success });
    } catch (err: any) {
      toast.error("Confirm Failed");

      dispatch({ type: "FAILED_CONFIRMED",payload:err.message });
    }
  };
};
export const CreateAccount = (user: UserOrig) => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    toast.dismiss();
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_RIGISTER" });
      const { data } = await axios.post(
        "http://localhost:4010/auth/createAccount",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      toast.success(data);
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_RIGISTER", payload: err.message });
    }
  };
};

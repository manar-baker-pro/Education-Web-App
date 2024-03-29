import axios from "axios";
import { Dispatch } from "react";
import {
  SigninInter,
  TrySign,
} from "../../reducer/usereducer/authreducer/userRinter";
import { ActionUser } from "./actionInterface";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { RootState } from "../../store";
import { SocketAction } from "../../reducer/socketreducer/SocketActionInter";
export const Login = (user: TrySign) => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({ type: "REQUEST_SIGN" });
      const { data } = await axios.post<SigninInter>(
        "http://localhost:4010/auth/signin",
        user
      );
      Cookies.set("AccessToken", data.accesstoken);
      localStorage.setItem("RefreshTokenn", data.refreshtoken!);
      data.refreshtoken = undefined;
      localStorage.setItem("UserData", JSON.stringify(data));
      dispatch({ type: "SUCCESS_SIGN", payload: data });
    } catch (err: any) {
      toast.dismiss();
      if (err.response) {
        if (err.response.data.confirm) {
          let message = {
            _id: err.response.data._id,
            email: err.response.data.handel,
          };
          toast.error("Confirm your email");
          dispatch({ type: "CLEAR_SIGN_IN_FLAG" });
          dispatch({ type: "SUCCESS_RIGISTER", payload: message });
        } else {
          toast.error(err.response.data.email);

          dispatch({ type: "FAILED_SIGN", payload: err.response.data });
        }
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_SIGN", payload: err.message });
      }
    }
  };
};

export const Logout = () => {
  return async (
    dispatch: Dispatch<ActionUser | SocketAction>,
    getState: () => RootState
  ) => {
    try {
      const {
        soCket: { socketio },
      } = getState();
      socketio?.emit("leaveApp");
      socketio?.disconnect();
      localStorage.clear();
      dispatch({ type: "SUCCESS_SIGNOUT" });
      dispatch({ type: "REMOVE_SOCKET" });
    } catch (err) {}
  };
};

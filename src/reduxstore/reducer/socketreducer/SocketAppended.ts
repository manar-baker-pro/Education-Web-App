import { Dispatch } from "react";
import { SocketAction } from "./SocketActionInter";

export const EstablishConnection = () => {
  return (dispatch: Dispatch<SocketAction>) => {
    try {
      dispatch({ type: "APPEND_SOCKET" });
    } catch (err: any) {
      console.log(err);
    }
  };
};

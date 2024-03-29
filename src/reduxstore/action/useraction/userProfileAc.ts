import axios from "axios";
import { Dispatch } from "react";
import { UserProfile } from "../../reducer/usereducer/authreducer/userRinter";
import { RootState } from "../../store";
import { ActionProfile } from "./actionProfileInterface";

export const GetProfile = () => {
  return async (
    dispatch: Dispatch<ActionProfile>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: "REQUEST_GET_PROFILE" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<UserProfile[]>(
        `http://localhost:4010/user/${userInfo?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_PROFILE", payload: data[0] });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_PROFILE", payload: err });
    }
  };
};

export const UpdateProfile = (user: UserProfile) => {
  return async (
    dispatch: Dispatch<ActionProfile>,
    getState: () => RootState
  ) => {
    try {
      dispatch({ type: "REQUEST_UPDATE_PROFILE" });
      const {
        userSign: { userInfo },
      } = getState();
      var languages = user.languages.map(function (item) {
        return item["_id"];
      });
      let us = { ...user, languages };
      delete us["email"];

      const { data } = await axios.put<UserProfile>(
        `http://localhost:4010/user/${userInfo?._id}`,
        us,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_UPDATE_PROFILE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_UPDATE_PROFILE", payload: err });
    }
  };
};

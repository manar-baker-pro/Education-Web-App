import axios, { CancelTokenSource } from "axios";
import { Dispatch } from "react";
import { toast } from "react-toastify";
import {
  UserDashInter,
  UserForSerach,
  UserSearchPage,
} from "../../reducer/usereducer/authreducer/userRinter";
import { RootState } from "../../store";
import { ActionUser } from "./actionInterface";

export const ActiveUsers = () => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<UserDashInter[]>(
        "http://localhost:4010/user/numbers",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_USERS", payload: data });
    } catch (err: any) {
      if (err.response) {
        toast.error("Error");
        dispatch({ type: "FAILED_GET_USERS", payload: err.response.data });
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_GET_USERS", payload: err });
      }
    }
  };
};

export const GetUsers = (query: string, cacelToken: CancelTokenSource) => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS_PAGE" });
      const {
        userSign: { userInfo },
      } = getState();
      const { data } = await axios.get<UserSearchPage[]>(
        `http://localhost:4010/user/allusers${query}`,
        {
          cancelToken: cacelToken.token,
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_USERS_PAGE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};
//CLEAR_USER_PAGE
export const ClearUserPage = () => {
  return async (dispatch: Dispatch<ActionUser>) => {
    dispatch({ type: "CLEAR_USER_PAGE" });
  };
};
export const GetUsersInConv = () => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      dispatch({ type: "REQUEST_GET_USERS" });
      const {
        userSign: { userInfo },
      } = getState();
      const {
        ConVersation: { currentChat },
      } = getState();
      const { data } = await axios.get<any[]>(
        `http://localhost:4010/conversation/${currentChat?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({
        type: "SUCCESS_GET_USERS_CONVERSATION",
        payload: data[0].members,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};
export const UpdateUsersInConv = (user: UserForSerach) => {
  return (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({
        type: "UPDATE_USERS_CONVERSATION",
        payload: user,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({ type: "FAILED_GET_USERS", payload: err });
    }
  };
};

// export const CheckUsersInConv = (index: number) => {
//   return (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
//     dispatch({ type: "CHECK_USER", payload: index });
//   };
// };

import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ActionConversation } from "./convAInter";
import {
  Conversation,
  CreateConversationInter,
} from "../../../reducer/contactreducer/conversation/converRinter";
import { ActionUser } from "../../useraction/actionInterface";
import { UserForSerach } from "../../../reducer/usereducer/authreducer/userRinter";
import { ActionMessage } from "../messageac/messageAInter";
export const CreateConversation = (conv: CreateConversationInter) => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_CONVERSATION" });
      let members = conv.members.map(function (item) {
        return item["_id"];
      });
      let con = { ...conv, members };
      await axios.post("http://localhost:4010/conversation/createConv", con, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfo ? userInfo.accesstoken : "",
        },
      });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_CREATE_CONVERSATION", payload: err.message });
    }
  };
};
export const AddConversation = (conver: Conversation) => {
  return (dispatch: Dispatch<ActionConversation>) => {
    try {
      let check = window.location.pathname.includes("chating");
      if (check) {
        if (window.location.pathname.length <= 8)
          dispatch({ type: "SUCCESS_ADD_CONVERSATION", payload: conver });
        else if (window.location.pathname.length > 9) {
          let currentlangId = window.location.pathname.substring(9);
          if (currentlangId === conver.language) {
            dispatch({ type: "SUCCESS_ADD_CONVERSATION", payload: conver });
          }
        }
      } else {
        dispatch({ type: "SUCCESS_ADD_CONVERSATION", payload: conver });
      }
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};

export const GetConversations = () => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_CONVERSATIONS" });
      const { data } = await axios.get<Conversation[]>(
        "http://localhost:4010/conversation/all",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_CONVERSATIONS", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_CONVERSATIONS", payload: err.message });
    }
  };
};
export const GetConversationsOfLang = (langId: string) => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_CONVERSATIONS" });
      const { data } = await axios.get<Conversation[]>(
        `http://localhost:4010/conversation/certain/${langId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_CONVERSATIONS", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_CONVERSATIONS", payload: err.message });
    }
  };
};
export const SetChatId = (id?: Conversation) => {
  return async (dispatch: Dispatch<ActionConversation>) => {
    dispatch({ type: "SET_CURRENT_CHAT", payload: id });
  };
};

export const JoinUserConversation = (
  convId: string,
  type: "real" | "static",
  user?: UserForSerach
) => {
  return async (
    dispatch: Dispatch<ActionConversation | ActionUser>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      if (type === "static") {
        dispatch({ type: "REQUEST_ADD_USER_CONVERSATION" });

        await axios.put(
          `http://localhost:4010/conversation/adduser/${convId}?userId=${userInfo?._id}`,
          { wh: "weee" },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfo ? userInfo.accesstoken : "",
            },
          }
        );
      } else {
        const {
          ConVersation: { currentChat },
        } = getState();
        if (currentChat?._id === convId) {
          dispatch({ type: "ADD_USER_CONVERSATION_N", payload: user! });
          if (userInfo && userInfo._id === user?._id) {
            dispatch({type:"CLEAR_FLAG_LANG"})
            let curr = { ...currentChat, isjoined: 1 };
            dispatch({ type: "SET_CURRENT_CHAT", payload: curr });
          }
        }
      }
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};
export const LeaveUserConversation = (
  convId: string,
  type: "real" | "static",
  userId?: string
) => {
  return async (
    dispatch: Dispatch<ActionConversation | ActionUser | ActionMessage>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      if (type === "static") {
        await axios.delete(
          `http://localhost:4010/conversation/removeuser?convId=${convId}&userId=${userInfo?._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfo ? userInfo.accesstoken : "",
            },
          }
        );
      } else {
        const {
          ConVersation: { currentChat },
        } = getState();
        if (userInfo && userInfo._id === userId) {
          if (currentChat?._id === convId) {
            dispatch({ type: "SET_CURRENT_CHAT", payload: undefined });
          }
          dispatch({ type: "SUCCESS_REMOVE_CONVERSATION", payload: convId });
          dispatch({ type: "CLEAR_MESSAGE_ARRAY" });
        }
        if (currentChat?._id === convId) {
          dispatch({ type: "DELETE_USER_CONVERSATION", payload: userId! });
        }
      }
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};

import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import { ActionQues } from "./questionAInter";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Question } from "../../reducer/questionreducer/questionRinter";
export const Createques = (question: Question) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      let id = question.language;
      let newquestion = { ...question };
      newquestion.language = undefined;
      dispatch({ type: "REQUEST_CREATE_QUESTION" });
      const { data } = await axios.post<Question>(
        `http://localhost:4010/question/create/${id}`,
        newquestion,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      if (data) {
        dispatch({ type: "SUCCESS_CREATE_QUESTION", payload: question });
        toast.success("Question created successfully");
      }
    } catch (err: any) {
      toast.dismiss();

      if (err.response) {
        if (err.response.status === 403) {
          toast.error(
            "You are not allowed to add question to the selected language"
          );
        } else toast.error("Failed to add question");

        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};
export const Getques = (language: string) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_QUESTIONS" });
      const { data } = await axios.get<Question[]>(
        `http://localhost:4010/question/all/${language}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_QUESTIONS", payload: data });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};

export const Getoptions = (
  language: string,
  quesId: string,
  optionId: string
) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_OPTIONS" });
      const { data } = await axios.get<{ success: boolean; option: string }>(
        `http://localhost:4010/question/answer?lang=${language}&optionId=${optionId}&quesId=${quesId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_ANSWER_QUESTION", payload: data });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};
export const ClearAnswer = () => {
  return (dispatch: Dispatch<ActionQues>) => {
    dispatch({ type: "CLEAR_ANSWER" });
  };
};

import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { ActionLecture } from "./lectureAInter";
import { Lecture, Slide } from "../../reducer/lecturereducer/lectureRinter";
export const Createlec = (lecture: Lecture) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_LECTURE" });
      const { data } = await axios.post<Lecture>(
        "http://localhost:4010/lecture",
        lecture,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );

      dispatch({ type: "SUCCESS_CREATE_LECTURE", payload: [data] });
      toast.success("Lecture Added Successfully");
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_LECTURE", payload: err.message });
      toast.error(err.message);
    }
  };
};

export const GetLecs = (langId: string) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_LECTURES" });
      const { data } = await axios.get(
        `http://localhost:4010/lecture?lanId=${langId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_LECTURES", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_LECTURES", payload: err.message });
      toast.error("Something went wrong");
    }
  };
};

export const GetSlides = (lecId: string) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_SLIDES" });
      const { data } = await axios.get<Slide[]>(
        `http://localhost:4010/lecture/${lecId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_SLIDES", payload: data });
      dispatch({ type: "APPEND_SLIDES_PAGE", payload: 1 });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_SLIDES", payload: err.message });
    }
  };
};

export const AppendSlides = (pagNumber: number) => {
  return (dispatch: Dispatch<ActionLecture>) => {
    dispatch({ type: "APPEND_SLIDES_PAGE", payload: pagNumber });
  };
};

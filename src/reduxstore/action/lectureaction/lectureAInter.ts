import { Lecture, Slide } from "../../reducer/lecturereducer/lectureRinter";

interface LectureActionPending {
  type:
    | "REQUEST_CREATE_LECTURE"
    | "REQUEST_GET_LECTURES"
    | "REQUEST_GET_SLIDES";
}
interface SlideAppendSlide {
  type: "APPEND_SLIDES_PAGE";
  payload: number;
}
interface LectureActionSuccess {
  type: "SUCCESS_CREATE_LECTURE" | "SUCCESS_GET_LECTURES";
  payload: Lecture[];
}
interface SlideActionSuccess {
  type: "SUCCESS_GET_SLIDES";
  payload: Slide[];
}

interface LectureActionFail {
  type: "FAILED_CREATE_LECTURE" | "FAILED_GET_LECTURES" | "FAILED_GET_SLIDES";
  payload: any;
}

export type ActionLecture =
  | SlideAppendSlide
  | LectureActionPending
  | LectureActionSuccess
  | LectureActionFail
  | SlideActionSuccess;

import { Option, Question } from "../../reducer/questionreducer/questionRinter";

interface QuestionActionPending {
  type:
    | "REQUEST_CREATE_QUESTION"
    | "REQUEST_GET_QUESTIONS"
    | "REQUEST_GET_OPTIONS"
    | "CLEAR_ANSWER";
}

interface QuestionActionAnswer {
  type: "SUCCESS_ANSWER_QUESTION";
  payload: { success: boolean; option: string };
}
interface QuestionActionSuccess {
  type: "SUCCESS_CREATE_QUESTION";
  payload: Question;
}

interface QuestionSuccessGet {
  type: "SUCCESS_GET_QUESTIONS";
  payload: Question[];
}

interface QuestionActionFail {
  type:
    | "FAILED_CREATE_QUESTION"
    | "FAILED_GET_QUESTIONS"
    | "FAILED_GET_OPTIONS";
  payload: any;
}

export type ActionQues =
  | QuestionActionPending
  | QuestionActionSuccess
  | QuestionSuccessGet
  | QuestionActionFail
  | QuestionActionAnswer;

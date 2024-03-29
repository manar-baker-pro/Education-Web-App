import { ActionQues } from "../../action/questionaction/questionAInter";
import { QuestionState } from "./questionRinter";

export const quesTion = (
  state: QuestionState = {
    quesload: false,
    questionsDa: [],
    queserr: {},
    answer: undefined,
  },
  action: ActionQues
) => {
  switch (action.type) {
    case "REQUEST_CREATE_QUESTION":
      return { ...state, quesload: true };
    case "REQUEST_GET_QUESTIONS":
      return { ...state, quesload: true, optionDa: [], answer: undefined };
    case "REQUEST_GET_OPTIONS":
      return { ...state, quesload: true, answer: undefined };

    case "SUCCESS_CREATE_QUESTION":
      return {
        ...state,
        quesload: false,
        questionsDa: [...state.questionsDa, action.payload],
        queserr: {},
      };
    case "SUCCESS_GET_QUESTIONS":
      return {
        ...state,
        quesload: false,
        questionsDa: action.payload,
        queserr: {},
      };
    case "SUCCESS_ANSWER_QUESTION":
      return {
        ...state,
        quesload: false,
        answer: action.payload,
        queserr: {},
      };
    case "CLEAR_ANSWER":
      return { ...state, answer: undefined };
    case "FAILED_CREATE_QUESTION":
      return { ...state, quesload: false, queserr: action.payload };
    case "FAILED_GET_OPTIONS":
      return { ...state, quesload: false, queserr: action.payload };
    default: {
      return state;
    }
  }
};

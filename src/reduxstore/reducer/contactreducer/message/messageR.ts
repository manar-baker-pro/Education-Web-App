import { ActionMessage } from "../../../action/contacta/messageac/messageAInter";
import { MessageState } from "./messageRinter";
export const MessAge = (
  state: MessageState = {
    messload: false,
    pageNumber: 1,
    pageSize: 10,
    hasMore: false,
    messDa: [],
    messerr: {},
  },
  action: ActionMessage
) => {
  switch (action.type) {
    case "REQUEST_GET_MESSAGES":
      return { ...state, messload: true, messDa: [] };
    case "REQUEST_APPEND_MESSAGES":
      return { ...state, messload: true };

    case "REQUEST_CREATE_MESSAGE":
      return { ...state, messload: true };

    case "SUCCESS_GET_MESSAGES":
      return {
        ...state,
        messload: false,
        pageNumber:
          Math.floor(
            (state.messDa.length + action.payload.length) / state.pageSize
          ) + 1,
        messDa: [...action.payload, ...state.messDa],

        hasMore: action.payload.length === state.pageSize,
        messerr: {},
      };

    case "CLEAR_VARS_MESSAGE":
      return {
        ...state,
        messload: false,
        pageNumber: 1,
        hasMore: false,
      };
    case "CLEAR_MESSAGE_ARRAY":
      return { ...state, messDa: [] };

    case "SUCCESS_CREATE_MESSAGE":
      if ((state.messDa.length + 1) % state.pageSize > 0) {
        return {
          ...state,
          messload: false,
          messDa: [...state.messDa, action.payload],
          messerr: {},
        };
      } else {
        return {
          ...state,
          messload: false,
          pageNumber: state.pageNumber + 1,
          messDa: [...state.messDa, action.payload],
          messerr: {},
        };
      }

    case "FAILED_GET_MESSAGES":
      return {
        ...state,
        messload: false,
        messerr: action.payload,
      };
    case "FAILED_CREATE_MESSAGE":
      return {
        ...state,
        messload: false,
        messerr: action.payload,
      };

    default: {
      return state;
    }
  }
};

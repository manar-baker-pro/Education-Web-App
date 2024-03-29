import { ActionLanguage } from "../../action/langaction/langAInter";
import { LangState } from "./langRinter";
export const lanGuage = (
  state: LangState = {
    langload: false,
    langDa: [],
    langerr: {},
    formateDa: [],
  },
  action: ActionLanguage
) => {
  switch (action.type) {
    // case "REQUEST_CREATE_LANGUAGE":
    //   return { ...state, langload: true };

    // case "SUCCESS_CREATE_LANGUAGE":
    //   return {
    //     ...state,
    //     langload: false,
    //     langDa: [...state.langDa, action.payload],
    //     langerr: {},
    //   };

    // case "FAILED_CREATE_LANGUAGE":
    //   return { ...state, langload: false, langerr: action.payload };

    case "REQUEST_GET_LANGUAGE":
      return { ...state, langload: true };
    case "REQUEST_CREATE_LANGUAGE":
      return { ...state, langload: true };
    case "SUCCESS_CREATE_LANGUAGE":
      return { ...state, langload: false };
    case "SUCCESS_GET_LANGUAGE":
      return {
        ...state,
        langload: false,
        langDa: action.payload,
        langerr: {},
      };

    case "FAILED_GET_LANGUAGE":
      return { ...state, langload: false, langerr: action.payload };
    case "FILL_FORMATE_DATA":
      let formats = state.langDa.find((item) => item._id === action.payload);
      if (formats)
        return {
          ...state,
          formateDa: formats.format || [],
        };
      else return { ...state, formateDa: [] };
    default: {
      return state;
    }
  }
};

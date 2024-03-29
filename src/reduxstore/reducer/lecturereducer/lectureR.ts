import { ActionLecture } from "../../action/lectureaction/lectureAInter";
import { LectureState, Slide } from "./lectureRinter";

export const lecTure = (
  state: LectureState = {
    lecload: false,
    lecDa: [],
    lecerr: {},
    slidDa: [],
    pageSizeSlide: 2,
    currentSlides: [],
  },
  action: ActionLecture
) => {
  switch (action.type) {
    //

    case "REQUEST_GET_LECTURES":
      return { ...state, lecload: true, lecDa: [] };
    case "SUCCESS_GET_LECTURES":
      return { ...state, lecload: false, lecDa: action.payload };
    case "FAILED_GET_LECTURES":
      return { ...state, lecload: false, lecerr: action.payload };

    //
    case "REQUEST_GET_SLIDES":
      return { ...state, lecload: true, slidDa: [] };
    case "SUCCESS_GET_SLIDES":
      return { ...state, lecload: false, slidDa: action.payload };

    case "APPEND_SLIDES_PAGE":
      let start = (action.payload - 1) * state.pageSizeSlide;
      let ar: Slide[] = [];
      for (
        let i = start;
        i < Math.min(state.slidDa.length, start + state.pageSizeSlide);
        i++
      ) {
        ar.push(state.slidDa[i]);
      }
      return { ...state, currentSlides: ar };

    case "FAILED_GET_SLIDES":
      return { ...state, lecload: false, lecerr: action.payload };

    //

    case "REQUEST_CREATE_LECTURE":
      return { ...state, lecload: true };
    case "SUCCESS_CREATE_LECTURE":
      return {
        ...state,
        lecload: false,
        lecDa: [...state.lecDa, action.payload[0]],
        lecerr: {},
      };
    case "FAILED_CREATE_LECTURE":
      return { ...state, lecload: false, lecerr: action.payload };

    //
    default: {
      return state;
    }
  }
};

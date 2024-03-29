import { ActionProfile } from "../../action/useraction/actionProfileInterface";
import { UserProfileState } from "./authreducer/userRinter";

export const userProfile = (
  state: UserProfileState = {
    userprofileload: false,
    userprofileerror: undefined,
    userprofilemessage: undefined,
    userprofileinfo: {
      email: "",
      languages: [],
      name: "",
      profilePic: "",
    },
  },
  action: ActionProfile
) => {
  switch (action.type) {
    case "REQUEST_GET_PROFILE":
      return { ...state, userprofileload: true, userprofileerror: undefined };
    case "REQUEST_UPDATE_PROFILE":
      return { ...state, userprofileload: true, userprofileerror: undefined };

    case "SUCCESS_GET_PROFILE":
      return {
        ...state,
        userprofileload: false,
        userprofileinfo: action.payload,
      };

    case "SUCCESS_UPDATE_PROFILE":
      return {
        ...state,
        userprofileload: false,
        userprofileerror: undefined,
        userprofileinfo: action.payload,
      };
    case "FAILED_UPDATE_PROFILE":
      return {
        ...state,
        userprofileload: false,
        userprofileerror: action.payload,
      };
    case "FAILED_GET_PROFILE":
      return {
        ...state,
        userprofileload: false,
        userprofileerror: action.payload,
      };

    default: {
      return state;
    }
  }
};

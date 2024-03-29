import { UserProfile } from "../../reducer/usereducer/authreducer/userRinter";

interface ActionPendingProfile {
  type: "REQUEST_GET_PROFILE" | "REQUEST_UPDATE_PROFILE";
}
interface ActionGetSuccessProfile {
  type: "SUCCESS_GET_PROFILE";
  payload: UserProfile;
}
interface ActionGetFailedProfile {
  type: "FAILED_GET_PROFILE" | "FAILED_UPDATE_PROFILE";
  payload: any;
}
interface ActionUpdateSuccessProfile {
  type: "SUCCESS_UPDATE_PROFILE";
  payload: UserProfile;
}

export type ActionProfile =
  | ActionPendingProfile
  | ActionGetSuccessProfile
  | ActionGetFailedProfile
  | ActionUpdateSuccessProfile;

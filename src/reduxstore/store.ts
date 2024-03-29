import {   legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userSign } from "./reducer/usereducer/authreducer/userSignin";
import { userRigister } from "./reducer/usereducer/authreducer/userSignup";
import { quesTion } from "./reducer/questionreducer/questionR";
import { lecTure } from "./reducer/lecturereducer/lectureR";
import { lanGuage } from "./reducer/langreducer/langR";
import { userDash } from "./reducer/usereducer/userDash";
import { soCket } from "./reducer/socketreducer/SocketReducer";
import { ConVersation } from "./reducer/contactreducer/conversation/converR";
import { roLe } from "./reducer/rolereducer/roleR";
import { MessAge } from "./reducer/contactreducer/message/messageR";
import { userProfile } from "./reducer/usereducer/userProfileR";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { ActionUser } from "./action/useraction/actionInterface";
const check = localStorage.getItem("UserData");
if (typeof check === "string") {
  var userInfo: any = JSON.parse(localStorage.getItem("UserData") || "");
}

const initialstate: any = { userSign: { userInfo }, userRigister: {} };

const reducer = combineReducers({
  userSign: userSign,
  userRigister: userRigister,
  userDash: userDash,
  quesTion: quesTion,
  lecTure: lecTure,
  lanGuage: lanGuage,
  soCket: soCket,
  ConVersation: ConVersation,
  roLe: roLe,
  MessAge: MessAge,
  userProfile: userProfile,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "SUCCESS_SIGNOUT") {
    state = undefined;
  }
  return reducer(state, action);
};

const config = {
  predicate: (action: ActionUser) =>
    action.type === "REQUEST_RIGISTER" ||
    action.type === "REQUEST_SIGN" ||
    action.type === "REQUEST_CONFIRMED" ||
    action.type === "SUCCESS_RIGISTER" ||
    action.type === "SUCCESS_SIGN" ||
    action.type === "SUCCESS_SIGNOUT" ||
    action.type === "SUCCESS_CONFIRMED" ||
    action.type === "CLEAR_SIGN_IN_FLAG" ||
    action.type === "FAILED_CONFIRMED" ||
    action.type === "FAILED_RIGISTER" ||
    action.type === "FAILED_SIGN",
};
const middlewares:any = [createStateSyncMiddleware(config)];
export const Store =
  rootReducer &&
  createStore(
    rootReducer,
    initialstate,
    // composeWithDevTools(applyMiddleware(thunk, ...middlewares))
  );
initMessageListener(Store);

export type RootState = ReturnType<typeof reducer>;

import {
  SigninInter,
  SuccessUp,
  UserForSerach,
  UserSearch,
  UserSearchPage,
} from "../../reducer/usereducer/authreducer/userRinter";

interface ActionPendingUser {
  type:
    | "REQUEST_SIGN"
    | "REQUEST_RIGISTER"
    | "REQUEST_GET_USERS"
    | "REQUEST_GET_USERS_PAGE"
    | "CLEAR_SIGN_IN_FLAG"
    | "SUCCESS_SIGNOUT"
    | "CLEAR_USER_PAGE"
    | "REQUEST_CONFIRMED"
    | "REQUEST_CONFIRMED";
}

interface Signin {
  type: "SUCCESS_SIGN";

  payload: SigninInter;
}

interface Signup {
  type: "SUCCESS_RIGISTER";
  payload: SuccessUp;
}
interface SuccesConfirmed {
  type: "SUCCESS_CONFIRMED";
  payload: boolean;
}
interface UserActionSuccess {
  type: "SUCCESS_GET_USERS";
  payload: Array<any>;
}

interface UserPagingSuccess {
  type: "SUCCESS_GET_USERS_PAGE";
  payload: UserSearchPage[];
}
interface UserPagingUpdate {
  type: "CHECK_USER";
  payload: number;
}
interface UserActionGet {
  type: "SUCCESS_GET_USERS_ALL";
  payload: UserSearch;
}

interface UserActionSuccessWithConversation {
  type: "SUCCESS_GET_USERS_CONVERSATION";
  payload: UserForSerach[];
}

interface ActionUpdateUsersConver {
  type: "UPDATE_USERS_CONVERSATION" | "ADD_USER_CONVERSATION_N";
  payload: UserForSerach;
}

interface ActionRemoveUserConver {
  type: "DELETE_USER_CONVERSATION";
  payload: string;
}

interface ActionFailUser {
  type:
    | "FAILED_SIGN"
    | "FAILED_RIGISTER"
    | "FAILED_GET_USERS"
    | "FAILED_CONFIRMED";
  payload: any;
}

export type ActionUser =
  | ActionPendingUser
  | Signin
  | Signup
  | SuccesConfirmed
  | ActionFailUser
  | UserActionSuccess
  | UserActionGet
  | UserActionSuccessWithConversation
  | ActionUpdateUsersConver
  | ActionRemoveUserConver
  | UserPagingSuccess
  | UserPagingUpdate;

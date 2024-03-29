import { ActionUser } from "../../action/useraction/actionInterface";
import {
  UserDashState,
  UserForSerach,
  UserSearchPage,
} from "./authreducer/userRinter";

export const userDash = (
  state: UserDashState = {
    userload: false,
    users: [],
    userspage: [],
    totalusers: [],
    totalUsers: 0,
    usererror: {},
    pageSizeUser: 5,
    currentPageUser: 1,
    hasMoreUsers: false,
    userdashload: false,
  },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_GET_USERS":
      return { ...state, userload: true, users: [] };
    case "REQUEST_GET_USERS_PAGE":
      return { ...state, userdashload: true };

    // case "CHECK_USER":
    //   state.userspage[action.payload] = {
    //     ...state.userspage[action.payload],
    //     checked: state.userspage[action.payload]["checked"] ? false : true,
    //   };
    //   return {
    //     ...state,
    //     userspage: state.userspage,
    //   };

    case "SUCCESS_GET_USERS_CONVERSATION":
      return { ...state, userload: false, users: action.payload };
    case "UPDATE_USERS_CONVERSATION":
      let inconver = [...state.users];
      let newarr = inconver.map((inc) => {
        if (inc._id === action.payload._id) {
          return action.payload;
        } else return inc;
      });

      return { ...state, userload: false, users: newarr };
    case "ADD_USER_CONVERSATION_N":
      return {
        ...state,
        userload: false,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER_CONVERSATION":
      let inconve: UserForSerach[] = [];
      state.users.forEach((inc) => {
        if (inc._id !== action.payload) {
          inconve.push(inc);
        }
      });
      return { ...state, userload: false, users: inconve };
    case "SUCCESS_GET_USERS":
      return {
        ...state,
        userload: false,
        totalusers: action.payload,
        usererror: {},
      };
    case "SUCCESS_GET_USERS_ALL":
      return {
        ...state,
        userload: false,
        users: action.payload.users,
        totalUsers: action.payload.totalCount[0]
          ? action.payload.totalCount[0].total
          : 0,
        usererror: {},
      };
    case "CLEAR_USER_PAGE":
      return {
        ...state,
        hasMoreUsers: true,
        userdashload: false,
        currentPageUser: 1,
        userspage: [],
      };
    case "SUCCESS_GET_USERS_PAGE":
      let userpage: UserSearchPage[] = [];
      if (state.currentPageUser === 1) {
        userpage = action.payload;
      } else {
        userpage = [...state.userspage, ...action.payload];
      }
      return {
        ...state,
        userdashload: false,
        currentPageUser:
          Math.floor(
            (state.userspage.length + action.payload.length) /
              state.pageSizeUser
          ) + 1,
        userspage: userpage,
        hasMoreUsers: action.payload.length === state.pageSizeUser,
      };
    case "FAILED_GET_USERS":
      return {
        ...state,
        userload: false,
        usererror: action.payload,
        users: [],
        totalUsers: 0,
      };

    default: {
      return state;
    }
  }
};

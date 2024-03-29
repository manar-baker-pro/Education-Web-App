import { Role } from "../../rolereducer/roleRinter";
//auth
export interface SigninInter {
  _id: string;
  accesstoken: string;
  refreshtoken?: string;
  picture:string;
  role: Role;
}
export interface SigninState {
  userInfo?: SigninInter;
  loadin: boolean;
  errorin: any;
}
export interface TrySign {
  email: string;
  password: string;
}
export interface TryRegister {
  name: string;
  confirmpassword: string;
  email: string;
  password: string;
}
export interface SuccessUp {
  _id: string;
  email: string;
}
export interface SignupState {
  message?: SuccessUp;
  loadup: boolean;
  success: boolean;
  errorup?: any;
}

// user
export interface UserOrig {
  name: string;
  email: string;
  password?: string;
  confirmpassword?: string;
  role: string;
  languages: Array<string>;
}

export interface UserDashInter {
  name: string;
  Active_Users: number;
}
export interface UserForSerach {
  _id: string;
  email: string;
  name: string;
  Isonline?: boolean;
  profilePic:string
}
export interface UserSearch {
  totalCount: [{ total: number }];
  users: UserForSerach[];
}
export interface UserSearchPage {
  _id: string;
  name: string;
  email: string;
  role: string;
  profilePic?: string;
  checked?: boolean;
}

export interface UserDashState {
  userload: boolean;
  userdashload: boolean;
  usererror: any;
  totalusers: Array<any>;
  userspage: UserSearchPage[];
  users: UserForSerach[];
  totalUsers: number;
  pageSizeUser: number;
  currentPageUser: number;
  hasMoreUsers: boolean;
}
export interface Experiances {
  _id: string;
  lang: string;
  format?: string;
  description?: string;
}
export interface UserProfile {
  name: string;
  email?: string;
  languages: Experiances[];
  profilePic: string;
}
export interface UserProfileState {
  userprofileload: boolean;
  userprofileerror: any;
  userprofilemessage?: string;
  userprofileinfo: UserProfile;
}

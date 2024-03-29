// import { UserOrig } from "../usereducer/authreducer/userRinter";

export interface Lang {
  _id?: string;
  lang: string;
  description?: string;
  format?: string[];
  picture: string;
}

export interface LangState {
  langload: boolean;
  langDa: Lang[];
  formateDa: string[];
  langerr: any;
}
